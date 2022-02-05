import React, { Component } from 'react' 
import './App.css';
import movieData from './MovieData';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';

class App extends Component{
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }

  componentDidMount = () => {
    this.setState({ movies: movieData.movies});
  }

  selectMovie = () => {
    return (
      <MovieInfo />
    )
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
        <Header />
        <MovieContainer movies={this.state.movies} selectMovie={this.selectMovie} />
      </main>
    )
  }

}


export default App;
