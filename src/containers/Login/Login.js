import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { signUserIn } from '../../thunks/signUserIn';
import './Login.scss';

export class Login extends Component {
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

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password} = this.state;
        const signInAttempt = await this.props.signUserIn({email,password});
        if(signInAttempt !== undefined) {
          this.setState({inncorrectUserInfo: true})
        } else {
          this.setState({validUser: true})
        }
    }

    // signUserIn = () => {
    //   const {email, password} = this.state
    //   const url = 'http://localhost:3000/api/users/'
    //   const options = {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email,
    //       password
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    //   fetch(url, options)
    //   .then(response => this.setState({response: response.status}))
    //   .catch(error => console.log('error', error))
    // }


    render() {
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
              <form onSubmit={this.handleSubmit}>
                <input type='text' name='email' placeholder='Email' onChange={this.handleChange}></input>
                <input type= 'text' name='password' placeholder='Password' onChange={this.handleChange}></input>
                <input type='submit' value='Login' className='login'></input>
                <h2>Don't Have An Account?</h2>
                <Link className='form-link' to='/Signup'>Create An Account</Link>
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