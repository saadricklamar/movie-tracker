import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { signUserIn } from '../../thunks/signUserIn';
import './Login.scss';
import {fetchData}  from '../../util/fetchData';
import {key} from '../../util/key';

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            incorrectUserInfo: false,
            validUser: false,
            error: '',
            movies: []
        }
    }

    componentDidMount = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;
      const movies = await fetchData(url);
      this.setState({movies: movies.results})
    }

    handleChange = (e) => {
        const { value, name} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password} = this.state;
        const signInAttempt = await this.props.signUserIn({email,password});
        if(signInAttempt !== undefined) {
          this.setState({inncorrectUserInfo: true})
          this.setState({error: 'Your password or email is incorrect'})
        } else {
          this.setState({validUser: true})
        }
    }

    render() {
      console.log(this.state.movies)
      const { email, password, incorrectUserInfo, error, movies} = this.state;
      const movieImg = movies.map(movie => {
         return (
           <article>
             <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path}/>
           </article>
         )
        })
        if(this.state.validUser) {
          return (
            <Redirect to='/MovieContainer'/>
          )
        } 
        return(
            <div className='App'>
            <section className='container'>
            <header>
              <h1>Movie <i className="fas fa-film"></i> Tracker</h1>
            </header>
            <main>
            <div className='movie-home'>{movieImg}</div>
              <form onSubmit={this.handleSubmit}>
                <input type='text' name='email' placeholder='Email' onChange={this.handleChange}></input>
                <input type= 'text' name='password' placeholder='Password' onChange={this.handleChange}></input>
                <h3 className='incorrect-user-info'>{error}</h3>
                <input type='submit' value='Login' className='login'></input>
                <h2>Don't Have An Account?</h2>
                <Link className='form-link' to='/Signup'>Create Account</Link>
              </form>
            </main>
            
            </section>
          </div>

        )
    }

}

export const mapDispatchToProps = (dispatch) => ({
  signUserIn: (user) => dispatch(signUserIn(user))
})

export default connect(null, mapDispatchToProps)(Login)
// export default Login;