import React, { Component } from "react";
import "./MovieContainer.scss";
import { signOut } from "../../actions";
import { key } from "../../util/key";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../thunks/fetchMovieThunk";
import MovieCard from "../MovieCard/MovieCard";
import { getFavorites } from "../../util/fetchData";
import { uid } from "react-uid";
import { PropTypes } from 'prop-types';

export class MovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      favorites: false,
      favoriteMovies: [],
      error: ""
    };
  }

  componentDidMount = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc`;
    const favoriteMovies = await getFavorites(this.props.user_id);
    this.setState({ favoriteMovies: favoriteMovies.data });
    await this.props.loadMovies(url);
  };

  toggleFavoritesDisplay = () => {
    if (this.state.favoriteMovies) {
      this.setState({ favorites: true });
    } else {
      this.setState({ favorites: false });
    }
  };

  toggleHomeDisplay = () => {
    this.setState({ favorites: false });
  };

  render() {
    const { movies } = this.props;
    const { favorites, error } = this.state;
    return (
      <section>
        <header>
          <section className="header-title">
            <h1 className="h1">
              Movie <i className="fas fa-film" /> Tracker
            </h1>
          </section>
        <nav role='navigation'>
          <div id='menuToggle'> 
            <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>   
            <ul id='menu'>
            <h4 className='user-name'>Welcome, {this.props.user.name}</h4>
              <Link to='/MovieContainer'>
                <li onClick={this.toggleHomeDisplay}>Home</li>
              </Link>
                <hr></hr>
              <Link to='MovieContainer/favorites'>
                <li onClick={this.toggleFavoritesDisplay}>Favorites</li>
              </Link>
                <hr></hr>
              <Link to=''>
                <li>About</li>
              </Link>
                <hr></hr>
              <Link to='/Login'>
                <li onClick={signOut}>Sign Out</li>
              </Link>
                <hr></hr>
            </ul>
          </div>
        </nav>
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
            {this.state.favoriteMovies.map(movie => {
              return <MovieCard movie={movie} key={uid(movie)} />;
            })}
          </main>
        )}
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  user_id: state.users.id,
  user: state.users
});

export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  loadMovies: url => dispatch(fetchMovies(url))
});

MovieContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  user_id: PropTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);

//favorites is only updating in react state and not in redux state
//we have a deleteFav action that we should be using
