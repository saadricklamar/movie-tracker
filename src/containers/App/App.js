import React, { Component } from 'react';
import './App.css';
import {fetchData} from '../../util/fetchData.js';
import {key} from '../../util/key.js';
import {cleanMovieData} from '../../util/helpers.js';


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
    const movies = this.state
    const displayMovies = movies.length && movies.map(movie => {
     return <img alt='Movie posters for current top movies' src={movie.posterImage} />
   })
    return (
      <div className="App">
      <h1>
        Movie-Tracker
        {displayMovies}
      </h1>
      </div>
    );
  }
}

export default App;
