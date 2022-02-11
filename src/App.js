import React, { Component } from 'react' 
import './App.css';
// import movieData from './MovieData';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import { fetchApi } from './apiCalls';
import Error from './Components/Error/Error';
import { Route } from 'react-router-dom';

class App extends Component{
  constructor() {
    super()
    this.state = {
      movies: [],
      isSelected: false,
      singleMovie: {},
      error: '',
      isError: false,
      isLoading: true
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
    console.log('componentDidMount firing')
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
        this.setState({ isSelected: true, singleMovie: data.movie, isLoading: false })
      )
      .catch(() => {this.setState({ isError: true });
      });
    console.log('Single Movie', this.singleMovie)
    console.log('selectMovie firing')
  }

  navigateHome = () => {
    this.setState({ isSelected: false, singleMovie: {}, error: '' })
  }

  render() {
    if (this.state.loading) {
      return <div className="loading">Loading</div>;
    } else {    
      return (
        <main>   
          <Route exact path="/" render={() =>
            <>
            <Header />
            <MovieContainer
              movies={this.state.movies}
              selectMovie={this.selectMovie}
              />
            </>
            }
            />
  
          <Route path='/:id'
            render={({ match }) => {  
              // console.log('method', selectMovie)
              // console.log(match)
              // console.log('state', this.state.singleMovie)
              // const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
              // console.log('SHOW ME', movieToRender)
              const movieId = parseInt(match.params.id)
              return <MovieInfo id={movieId} navigateHome={this.navigateHome} />
              // return <MovieInfo movie={match} />
            }
            }/>   
          <Route>
            <Error error={this.state.error} navigateHome={this.navigateHome} /> 
          </Route>
        </main>
      );
    }
    }

}


export default App;
