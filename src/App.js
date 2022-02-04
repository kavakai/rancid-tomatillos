import React, { Component } from 'react' 
import './App.css';
import movieData from './MovieData';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';

class App extends Component{
  constructor() {
    super()
    this.state = {
      movies: [movieData.movies],
    }
  }

  // componentDidMount = () => {
  //   this.setState({ movies: movieData});
  // }

  render() {
    return (
      <main>
        <Header />
        <MovieContainer movies={this.state.movies}/>
      </main>
    )
  }

}


export default App;
