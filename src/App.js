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
    console.log(id)
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
          <>
            <Route exact path='/movies/:id'
            render={({ match }) => {
              console.log(this.state.singleMovie, 'movie')
                return <MovieInfo
                  movie={this.state.singleMovie}
                  navigateHome={this.navigateHome}
                />;
              }}
            />
          </>
          <>
            <Header />
            <Route exact path="/" render={() => <MovieContainer
              movies={this.state.movies}
              selectMovie={this.selectMovie}
            />} />

            {/* <MovieContainer
              movies={this.state.movies}
              selectMovie={this.selectMovie}
            /> */}
          </>
        <Route>
          <Error error={this.state.error} navigateHome={this.navigateHome} /> 
        </Route>
      </main>
    );
  }

}


export default App;
