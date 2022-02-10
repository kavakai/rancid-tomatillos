import React, { Component } from 'react';
import MovieImg from '../MovieImg/MovieImg';
import './MovieInfo.css';
import MovieDescriptors from '../MovieDescriptors/MovieDescriptors';
import { fetchApi } from "../../apiCalls";

class MovieInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      movie: {},
      error: '',
      isError: '',
      loading: true,
    }
  }
  
  componentDidMount = () => {
    fetchApi("movies", this.state.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({ error: response.status })
        }
      })
      .then((data) => {
        this.setState({ movie: data.movie, loading: false })
      })
      .catch(() => {this.setState({ isError: true });
    });
  }

  render() {
    if (this.state.loading) {
      return <h2 >Loading</h2>
    } else {
      return (
        <section className="movie-info">
          <MovieImg movie={this.state.movie} />
          <MovieDescriptors
          movie={this.state.movie}
          navigateHome={this.props.navigateHome}
        />
        </section>
      );
    }
  }
};

export default MovieInfo;