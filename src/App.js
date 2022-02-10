import React, { Component } from 'react' 
import './App.css';
// import movieData from './MovieData';
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Header from './Components/Header/Header';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import { fetchApi } from './apiCalls';
import Error from './Components/Error/Error';
import { Route, Switch } from 'react-router-dom';

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

  navigateHome = () => {
    this.setState({isSelected: false, singleMovie: {}, error: ''})
  }

  render() {
    return (
      <main>
        <Switch>
        <>
          <Route exact path="/" render={() => (
              <>
                <Header />
                <MovieContainer
                  movies={this.state.movies}
                  selectMovie={this.selectMovie}
                />
              </>
            )}
          />
          <Route path="/:id" render={({ match }) => {
            const movieId = parseInt(match.params.id)
              return <MovieInfo
                      id={movieId}
                      navigateHome={this.navigateHome}
                    />;
            }}
          />
        </>
        <Route>
          <Error error={this.state.error} navigateHome={this.navigateHome} />
        </Route>
        </Switch>
      </main>
    );
  }

}


export default App;
