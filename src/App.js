// import movieData from './MovieData';
import React, { Component } from 'react' 
import './App.css';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import { fetchApi } from './apiCalls';
import Error from './Components/Error/Error';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';

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
      filteredMovies: ''
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
      .catch(() => this.setState({ isError: true }))
  }

  navigateHome = () => {
    this.setState({filteredMovies: ''})
  }

  filterMovies = ({ textInput, dateInput, ratingInput }) => {
    let text = textInput.toLowerCase();
    let filtered = this.state.movies.filter(movie => {
      let compareDate = movie.release_date.split('-').splice(0, 2).join('-');
      let rating = movie.average_rating / 2;
      if ((textInput.length && movie.title.toLowerCase().includes(text)) || (dateInput.length > 0 && compareDate === dateInput) || (ratingInput.length && rating >= ratingInput)) {
        return movie
      }
    })
    filtered.length > 0 ? this.setState({ filteredMovies: [...filtered] }) : this.setState({ error: "No movies found, try again" });
  }

  clearFiltered = () => {
    this.setState({filteredMovies: '', error: ''})
  }

  render() {
    if (this.state.loading && !this.state.error) {
      return (<div className="loader"></div>)
    } else {
      return (
        <main>
          <Switch>
            <Route exact path="/"
              render={() =>
              (this.state.error ?
                <Error error={this.state.error} clearFiltered={this.clearFiltered} /> :
                <>
                  <Header />
                  <Sidebar filterMovies={this.filterMovies} clearFiltered={this.clearFiltered} />
                  <MovieContainer
                    navigateHome={this.navigateHome}
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
                return (<MovieInfo id={movieId} navigateHome={this.navigateHome} />);
                }
              }
            />
          </Switch>
        </main>
      );
    }
  }
};

export default App;