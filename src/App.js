import React, { Component } from 'react' 
import './App.css';
import movieData from './MovieData';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';
import MovieInfo from './Components/MovieInfo/MovieInfo';

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
    this.setState({ movies: movieData.movies});
  }

  selectMovie = (id) => {
    console.log(id, 'id')
    const movie = this.state.movies.find(film => film.id === id)
    console.log(movie, 'movie')
    this.setState({ isSelected: true, singleMovie: movie })
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
