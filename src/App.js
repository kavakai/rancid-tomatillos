import React, { Component } from 'react' 
import './App.css';
// import movieData from './MovieData';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import { fetchApi } from './apiCalls';

class App extends Component{
  constructor() {
    super()
    this.state = {
      movies: [],
      isSelected: false,
      singleMovie: {}
    }
  }

  componentDidMount = () => {
    fetchApi('movies')
      .then((data) => this.setState({ movies: data.movies }))
  }

  selectMovie = (id) => {
    fetchApi("movies", parseInt(id)).then((data) =>
      this.setState({ isSelected: true, singleMovie: data.movie })
    );
  }
  navigateHome = () => {
     this.setState({isSelected: false, singleMovie: {}})
  }

  render() {
    return (
      <main>
        {this.state.isSelected && <MovieInfo movie={this.state.singleMovie} navigateHome={this.navigateHome}/>}
        {!this.state.isSelected && <><Header />
        <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} /></>}
      </main>
    )
  }

}


export default App;
