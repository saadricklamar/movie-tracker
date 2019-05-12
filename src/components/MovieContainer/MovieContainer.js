import React, { Component } from 'react';
import './MovieContainer.scss';
import { signOut } from '../../actions';
import {key} from '../../util/key';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchMovies} from '../../thunks/fetchMovieThunk';
import MovieCard from '../MovieCard/MovieCard';
import { getFavorites } from '../../util/fetchData';
import {uid} from 'react-uid';


export class MovieContainer extends Component  {
    constructor() {
      super() 
      this.state = {
       favorites: '',
       favoriteMovies: []
      }

    }

    componentDidMount = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc`;
      const favoriteMovies = await getFavorites(this.props.user_id)
      this.setState({favoriteMovies: favoriteMovies.data})
      await this.props.loadMovies(url);
    }

    toggleFavorites = async () => {
      let current = ''
      const favoriteMovies = await getFavorites(this.props.user_id)
      if(!this.state.favorites) {
        current = 'favorites'
      }
      this.setState({
        favorites: current,
        favoriteMovies: favoriteMovies.data
      })
    }

  render() {
    const {movies} = this.props
    return (
    <section> 
        <header>
          <section className='header-title'>
            <h1 className='container-h1'>Movie <i className="fas fa-film"></i> Tracker</h1>
          </section>
        <nav role="navigation">
          <div id="menuToggle"> 
            <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>   
            <ul id="menu">
            <h4 className="user-name">Welcome, {this.props['user'].name}</h4>
              <li>Home</li>
              <hr></hr>
              <Link to='/favorites'>
                <li>Favorite</li>
              </Link>
              <hr></hr>
                <li>About</li>
              <hr></hr>
              <Link to='/Login'>
                <li onClick={signOut}>Sign Out</li>
              </Link>
              <hr></hr>
            </ul>
          </div>
        </nav>
        </header>
       <main className='movies'>{
         movies.map(movie => {
          return (
            <MovieCard movie={movie} key={uid(movie)}/>
          )
         })
        }
       
       </main>
    </section>
        )
}
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  user_id: state.users.id,
  // isLoading: state.isLoading,
  user: state.users
})

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  loadMovies: (url) => dispatch(fetchMovies(url))
})

export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer);

