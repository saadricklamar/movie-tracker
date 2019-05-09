import React, { Component } from 'react';
import './App.scss';
import {fetchData} from '../../util/fetchData.js';
import {key} from '../../util/key.js';
import {cleanMovieData} from '../../util/helpers.js';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import MovieContainer from '../../components/MovieContainer';
import { Route } from 'react-router-dom';



class App extends Component {
  constructor () {
    super()
    this.state = {
      movies: []
    }
  }

componentDidMount(){
  this.fetchMovies()
}

fetchMovies= async ()=>{
  const url= `https://api.themoviedb.org/3/discover/movie?api_key=${key}&/discover/movie?primary_release_year=2010&sort_by=vote_average.desc`;
  fetchData(url)
  let response = await fetchData(url)
  let movies = cleanMovieData(response)
  this.setState({
    movies
  })
}

  render() {
    const {movies} = this.state
    // const displayMovies = movies.length && movies.map(movie => {
    //  return <img src={movie.posterImage} />
  //  })
    return (
      <div className='App'>
        <Login />
        <MovieContainer movies={this.state.movies}/>
        <Signup />
        {/* {displayMovies} */}
      </div>
    );
  }
}

export default App;
