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
    }
  }

  componentDidMount = () => {
    this.setState({ movies: movieData.movies});
  }

  selectMovie = (id) => {
    this.setState({ isSelected: true })
    const movie = this.state.find(film => film.id === id)
    return movie
  }
  // navigateHome = () => {
  //     return (
  //       <main>
  //         <Header />
  //         <MovieContainer movies={this.state.movies}/>
  //       </main>
  //     )
  // }

  render() {
    return (
      <main>
        {this.state.isSelected && <MovieInfo movie={movie}/>}
        <Header />
        <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} />
      </main>
    )
  }

}


export default App;
