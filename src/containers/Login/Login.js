import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';
import { login } from '../../actions/';
import { Redirect } from 'react-router-dom'
import './Login.scss';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            response: null,
            incorrectUserInfo: false,
            validUser: false
        }
    }

    handleChange = (e) => {
        const { value, name} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password} = this.state;
        this.signUserIn(email,password);
    }

    signUserIn = () => {
      const {email, password} = this.state
      const url = 'http://localhost:3000/api/users/'
      const options = {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch(url, options)
      .then(response => this.setState({response: response.status}))
      .catch(error => console.log('error', error))
    }


    render() {
      console.log(this.state.response)
        if(this.state.response === 200) {
          return (
            <Redirect to='/MovieContainer' />
          )
        } else if (this.state.response === 500) {
          return (<p>Get your shit together! This is not a valid login</p>)
        }
        return(
            <div className='App'>
            <section className='container'>
            <header>
              <h1>Movie <i className="fas fa-film"></i> Tracker</h1>
            </header>
            <main>
              <form onSubmit={this.handleSubmit}>
                <input type='text' name='email' placeholder='Email' onChange={this.handleChange}></input>
                <input type= 'text' name='password' placeholder='Password' onChange={this.handleChange}></input>
                <input type='submit' value='Login' className='login'></input>
                <h2>Don't Have An Account?</h2>
                <a href='blank'><p>Create An Account</p></a>
              </form>
            </main>
            </section>
          </div>

        )
    }

}

export default Login;