import React, { Component } from 'react';
import './Signup.scss';

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


        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name} = e.target
        this.createUser();
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.password.value = '';
    }

    createUser = (state) => {
        const {name, email, password} = this.state
        const url = 'http://localhost:3000/api/users/new'
        const options = {
          method: 'POST',
          body: JSON.stringify({
            name,
            email,
            password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
        fetch(url, options)
        .catch(error => console.log(error));
        
      }

    render(){
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
                <button onClick={this.addUser} className="create-account">Sign Up</button>
        </form>
        </main>
      </div>
        )
    }
}

export default Signup;