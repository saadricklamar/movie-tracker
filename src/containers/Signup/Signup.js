import React, { Component } from 'react';
import './Signup.scss';
import { addUser } from '../../util/fetchData';
import { Redirect } from 'react-router-dom'

class Signup extends Component {
    //extends signin? 
    constructor() {
        super()
        this.state ={
            name: '',
            email: '',
            password: '',
            status: '',
            validUser: false,
            formCompleted: false,
            validEmail: false,
            duplicateUser: false,
            error: ''


        }
    }


    validateEmail = (email) => {
      var exp = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      var reg = new RegExp(exp);
      var emailInput = email;
      if (emailInput.match(reg)) {
        return true
      } else {
        return false;
      }
    }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        this.checkFormCompleted();
    }

    checkFormCompleted () {
      const { name, email, password} = this.state;
      if(name !== '' && email !== '' && password !== '') {
        this.setState({formCompleted: true})
      }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.createUser();
        // this.refs.name.value = '';
        // this.refs.email.value = '';
        // this.refs.password.value = '';
    }

    createUser = async () => {
        const {name, email, password} = this.state
        const emailValue = email;
        if(!this.validateEmail(emailValue)) {
          this.setState({validEmail: false, duplicateUser: false})
          return
        }
        const data = await addUser({name, email, password});
        if(data.error) {
          this.setState({validEmail: true, duplicateUser: true, error: 'Email already in use'})
        } else {
          this.setState({validUser: true})
        }
  }


    render(){
      if(this.state.validUser) {
        return <Redirect to='/Login'/>
      }
        return(
            <div className='signup-container'>
            <header>
              <h1>Movie <i className="fas fa-film"></i> Tracker</h1>
            </header>
            <main>
            <form className='signup' onSubmit={this.handleSubmit}>
                <input
                value={this.state.name}
                name='name'
                placeholder="Your Name"
                onChange={this.handleChange}
                className='input'
                ref='name'
            />
                <input
                    value={this.state.email}
                    name='email'
                    placeholder="Email"
                    onChange={this.handleChange}
                    className="input"
                    ref='email'
                />
                <input
                    value={this.state.password}
                    type='password'
                    name='password'
                    placeholder="Password"
                    onChange={this.handleChange}
                    className="input"
                    ref='password'
                />
                <h3>{this.state.error}</h3>
                <button className="create-account">Sign Up</button>
        </form>
        </main>
      </div>
        )
    }
}

export default Signup;