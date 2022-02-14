import React, { Component } from 'react' 
import './App.css';
// import movieData from './MovieData';
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
      filteredMovies: '',
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
    this.setState({filteredMovies: ''})
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

  filterMovies = ({textInput, dateInput, ratingInput}) => {
    let text = textInput.toLowerCase();
    let filtered;
    if (textInput.length) { 
      filtered = this.state.movies.filter(movie => movie.title.toLowerCase().includes(text))
      filtered.length > 0 ? this.setState({ filteredMovies: [ ...filtered ] }) : this.setState({error: "No movies found, try again"})
    } else if (dateInput.length > 0) {
      filtered = this.state.movies.filter(movie => {
        let compareDate = movie.release_date.split('-').splice(0, 2).join('-');
        if (compareDate === dateInput) {
          return movie
        } 
      })
      filtered.length > 0
        ? this.setState({ filteredMovies: [...filtered] })
        : this.setState({ error: "No movies found, try again" });
    } else if (ratingInput.length) {
      filtered = this.state.movies.filter(movie => {
        let rating = movie.average_rating / 2
        if (rating >= ratingInput) {
          return movie
        }
      })
      filtered.length > 0
        ? this.setState({ filteredMovies: [...filtered] })
        : this.setState({ error: "No movies found, try again" }); 
    }
  }

  clearFiltered = () => {
    this.setState({filteredMovies: ''})
  }
  // filterMovies = (input) => {
  //   let filtered = this.state.movies.filter(movie => {
  //     if (input === movie.average_rating.toString() || movie.release_date) {
  //       this.setState({ filteredMovies: { ...filtered } })
  //     } else {
  //       this.setState({filteredMovies: 'Sorry, there are no matches'})
  //     }
  //   })
  // }
  

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
                    <section className='main-display'>
                    <Sidebar filterMovies={this.filterMovies} clearFiltered={this.clearFiltered}/>
                    <MovieContainer
                    navigateHome={this.navigateHome}
                    filteredMovies={this.state.filteredMovies}
                    movies={this.state.movies}
                    selectMovie={this.selectMovie}
                  />
                    </section>
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
          </Switch>
        </main>
      );
    }
  }

}


export default App;
