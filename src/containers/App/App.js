import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor () {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
      const urlFilms = 'https://api.themoviedb.org/3/discover/movie?api_key=e694811cabd9b44f812bc17ce1606c63&/discover/movie?primary_release_year=2010&sort_by=vote_average.desc';
      fetch(urlFilms)
        .then(response => response.json())
        .then(results => this.setState({movies: results.results}))
        .catch(err => console.log(err))
  }





  render() {
    console.log(this.state.movies)
    return (
      <div className="App">
      <h1>
        Movie-Tracker
        {this.state.movies}
      </h1>
    </div>
    );
  }
}

export default App;
