import React, { Component } from 'react';
import MovieImg from '../MovieImg/MovieImg';
import './MovieInfo.css';
import MovieDescriptors from '../MovieDescriptors/MovieDescriptors';
import { fetchApi } from "../../apiCalls";
import Modal from '../Modal/Modal';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      movie: {},
      trailer: 'https://www.youtube.com/embed/',
      error: "",
      isError: "",
      loading: true,
      showModal: false,
    };
  }

  componentDidMount = () => {
    fetchApi("movies", this.state.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({ error: response.status });
        }
      })
      .then((data) => {
        this.getVideos()
        this.setState({ movie: data.movie, loading: false });
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  };

  getVideos = () => {
    fetchApi("movies", this.state.id, "videos")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({ error: response.status });
        }
      })
      .then((data) => {
        let id = data.videos.find(video => {
          return video.type === 'Trailer' 
        }).key
        this.setState((prevState) => { return { trailer: `${prevState.trailer}${id}` }});
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    if (this.state.loading) {
      return <div className="loader"></div>;
    } else {
      return (
        <section className="movie-info">
          <MovieImg movie={this.state.movie} />
          <Modal show={this.state.showModal} hideModal={this.hideModal} trailer={this.state.trailer} />
          <MovieDescriptors
            movie={this.state.movie}
            navigateHome={this.props.navigateHome}
            getVideos={this.getVideos}
            showModal={this.showModal}
            trailer={this.state.trailer}
          />
        </section>
      );
    }
  }
};

export default MovieInfo;