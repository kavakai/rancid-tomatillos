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
      isError: false
    }
  }

  componentDidMount = () => {
    fetchApi("movies")
      .then((response) => {
      if (response.ok) {
        return response.json();
      } else { 
        this.setState({ error: response.status })
      } 
      })
      .then((data) => this.setState({ movies: data.movies }))
      .catch(() => this.setState({ isError: true })
    );
  }

  selectMovie = (id) => {
    fetchApi("movies", id)
      .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        this.setState({ error: response.status })
      }
    })
      .then((data) =>
        this.setState({ isSelected: true, singleMovie: data.movie })
      )
      .catch(() => {this.setState({ isError: true });
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
