import React, { Component } from 'react';
import './App.css';
import {key} from './key';


class App extends Component {
  constructor () {
    super()
    this.state = {
      movies: []
    }
  }

  // componentDidMount() {
  //     const urlFilms = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&/discover/movie?primary_release_year=2010&sort_by=vote_average.desc`;
  //     fetch(urlFilms)
  //       .then(response => response.json())
  //       .then(results => this.setState({movies: results.results}))
  //       .catch(err => console.log(err))
  // }





  render() {
    return (
      <div className='App'>
      <section className='container'>
        <header>
          <h1>Movie <i class="fas fa-film"></i> Tracker</h1>
        </header>
        <main>
          <form>
            <label for='email-input'>Email</label>
            <input type='text' id='email-input' placeholder='Email'></input>
            <label for="email-input">Password</label>
            <input type= 'text' id='password-input' placeholder='Password'></input>
            <input type='submit' value='Login' className='login'></input>
            <h2>Don't Have An Account?</h2>
            <a href='blank'><p>Create An Account</p></a>
          </form>
        </main>
      </section>
    </div>
    );
  }
}

export default App;
