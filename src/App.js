import React, { Component } from 'react' 
import './App.css';
// import movieData from './MovieData';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import { fetchApi } from './apiCalls';
import Error from './Components/Error/Error';

class App extends Component{
  constructor() {
    super()
    this.state = {
      movies: [],
      isSelected: false,
      singleMovie: {},
      error: '',
    }
  }

  componentDidMount = () => {
    fetchApi("movies")
      .then((data) => this.setState({ movies: data.movies }))
      .catch((error) => this.setState({ error: error }));
  }

  selectMovie = (id) => {
    fetchApi("movies", id)
      .then((data) =>
        this.setState({ isSelected: true, singleMovie: data.movie })
      )
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  navigateHome = () => {
    this.setState({isSelected: false, singleMovie: {}, error: ''})
  }

  render() {
    return (
      <main>
        {this.state.isSelected && !this.state.error && (
          <>
            <MovieInfo
              movie={this.state.singleMovie}
              navigateHome={this.navigateHome}
            />
          </>
        )}

        {!this.state.isSelected && !this.state.error ? (
          <>
            <Header />
            <MovieContainer
              movies={this.state.movies}
              selectMovie={this.selectMovie}
            />
          </>
        ) : (
            this.state.error && <Error error={this.state.error} navigateHome={this.navigateHome} /> 
        )}
      </main>
    );
  }

}


export default App;
