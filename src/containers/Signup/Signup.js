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


        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }

    // addUser =() => {

    // }

    // submitChange =() => {

    // }

    render(){
        return(
            <div className='signup-container'>
            <header>
              <h1>Movie <i className="fas fa-film"></i> Tracker</h1>
            </header>
            <main>
            <form className='signup'>
                <input
                value={this.state.name}
                name='name'
                placeholder="Your Name"
                onChange={this.handleChange}
                className="input"
            />
                <input
                    value={this.state.email}
                    name='email'
                    placeholder="Email"
                    onChange={this.handleChange}
                    className="input"
                />
                <input
                    value={this.state.password}
                    type='password'
                    name='password'
                    placeholder="Password"
                    onChange={this.handleChange}
                    className="input"
                />
                <button onClick={this.addUser} className="create-account">Sign Up</button>
        </form>
        </main>
      </div>
        )
    }
}

export default Signup;