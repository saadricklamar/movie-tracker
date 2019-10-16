import React, { Component } from "react";
import { signOut, loadMovies, loading } from "../../actions";
import { key } from "../../util/key";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { uid } from "react-uid";
import { PropTypes } from "prop-types";

export class MovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      favorites: false,
      error: "",
      noFavorites: false
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc`
      );
      if (response.ok) {
        const movies = await response.json();
        this.props.addMovies(movies);
      } else throw Error("Failed to get movies");
    } catch (error) {
      this.setState({ error });
    }
  };

  toggleFavoritesDisplay = () => {
    const { movies } = this.props;
    let isThereAFavorite = movies.filter(movie => movie.favorite === true);
    if (isThereAFavorite.length) {
      this.setState({ favorites: true });
      this.setState({ noFavorites: false });
    } else {
      this.setState({ favorites: false });
      this.setState({ noFavorites: true });
    }
  };

  toggleHomeDisplay = () => {
    this.setState({ favorites: false });
  };

  render() {
    const { movies, loading } = this.props;
    const { favorites } = this.state;
    if (loading && !movies.length) {
      return (
        <div className="loader">
          <i class="fas fa-ticket-alt"></i>
        </div>
      );
    } else {
      return (
        <section>
          <header>
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <h4 className="user-name">Welcome, {this.props.user.name}</h4>
                  <Link to="/MovieContainer">
                    <li onClick={this.toggleHomeDisplay}>Home</li>
                  </Link>
                  <hr></hr>
                  <Link to="MovieContainer/favorites">
                    <li onClick={this.toggleFavoritesDisplay}>Favorites</li>
                  </Link>
                  {this.state.noFavorites && (
                    <p className="no-favorites">You have no favorites</p>
                  )}
                  <hr></hr>
                  <Link to="/about">
                    <li>About</li>
                  </Link>
                  <hr></hr>
                  <Link to="/Login">
                    <li onClick={signOut}>Sign Out</li>
                  </Link>
                  <hr></hr>
                </ul>
              </div>
            </nav>
            <section className="header-title">
              <h1 className="h1">
                Movie <i className="fas fa-film" /> Tracker
              </h1>
            </section>
          </header>
          {!favorites && (
            <main className="movies">
              {movies.map(movie => {
                return <MovieCard movie={movie} key={uid(movie)} />;
              })}
            </main>
          )}
          {favorites && (
            <main className="movies">
              {movies
                .filter(movie => movie.favorite === true)
                .map(movie => {
                  return <MovieCard movie={movie} key={uid(movie)} />;
                })}
            </main>
          )}
        </section>
      );
    }
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  user_id: state.users.id,
  user: state.users,
  loading: state.loading
});

export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  addMovies: obj => dispatch(loadMovies(obj)),
  loading: bool => dispatch(loading(bool))
});

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  addMovies: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  user_id: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
