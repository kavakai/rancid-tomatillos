import React, { Component } from 'react' 
import './App.css';
// import movieData from './MovieData';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import { fetchApi } from './apiCalls';
import Error from './Components/Error/Error';
import { Route, Switch } from 'react-router-dom';
// import Sidebar from './Components/Sidebar/Sidebar';

class App extends Component{
  constructor() {
    super()
    this.state = {
      movies: [],
      isSelected: false,
      singleMovie: {},
      error: '',
      isError: false,
      loading: true,
      filteredMovies: [],
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
      .then((data) => this.setState({ movies: data.movies, loading: false }))
      .catch(() => this.setState({ isError: true })
    );
  }

  navigateHome = () => {
    this.setState({isSelected: false, singleMovie: {}, error: ''})
  }

  // sortMovies = (category) => {
  //   if (category === 'newToOldRelease') {
  //     let filtered = this.state.movies.sort((movA, movB) => new Date(movA.release_date) - new Date(movB.release_date))
  //     this.setState({ filteredMovies: { ...filtered } })
  //   } else if (category === 'oldToNewRelease') {
  //     let filtered = this.state.movies.sort((movA, movB) => new Date(movB.release_date) - new Date(movA.release_date))
  //     this.setState({ filteredMovies: { ...filtered } })
  //   } else if (category === 'ratings') {
  //     let filtered = this.state.movies.sort((movA, movB) => (movA.average_rating) - (movB.average_rating))
  //     this.setState({ filteredMovies: { ...filtered } })
  //   }
  // }

  filterByTitle = (input) => {
    let text = input.toLowerCase()
    let filtered = this.state.movies.filter(movie => movie.title.toLowerCase().includes(text))
    this.setState({filteredMovies: filtered})
  }

  filterMovies = (input) => {
    let filtered = this.state.movies.filter(movie => {
      if (input === movie.average_rating.toString() || movie.release_date) {
        this.setState({ filteredMovies: { ...filtered } })
      } else {
        this.setState({filteredMovies: 'Sorry, there are no matches'})
      }
    })
  }
  

  render() {
    if (this.state.loading && !this.state.error) {
      return <div className="loader"></div>
    } else {
      return (
        <main>
          <Switch>
            <Route exact path="/"
              render={() => (
                this.state.error
                  ? <Error
                  error={this.state.error}
                  />
                  :
                <>
                  <Header />
                  {/* <Sidebar /> */}
                    <MovieContainer
                    filteredMovies={this.state.filteredMovies}
                    movies={this.state.movies}
                    selectMovie={this.selectMovie}
                  />
                </>
              )}
            />
            <Route
              path="/:id"
              render={({ match }) => {
                const movieId = parseInt(match.params.id);
                return (
                  <MovieInfo id={movieId} navigateHome={this.navigateHome} />
                );
              }}
            />
            {/* <Route
              path=" "
              render={() => (
                <Error
                  error={this.state.error}
                  navigateHome={this.navigateHome}
                />
              )}
            ></Route> */}
          </Switch>
        </main>
      );
    }
  }

}


export default App;
