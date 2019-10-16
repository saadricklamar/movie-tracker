import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signUserIn } from "../../thunks/signUserIn";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      incorrectUserInfo: false,
      validUser: false,
      error: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const signInAttempt = await this.props.signUserIn({ email, password });
    if (signInAttempt !== undefined) {
      this.setState({ inncorrectUserInfo: true });
      this.setState({ error: "Your password or email is incorrect" });
    } else {
      this.setState({ validUser: true });
    }
  };

  render() {
    const { error } = this.state;
    if (this.state.validUser) {
      return <Redirect to="/MovieContainer" />;
    }
    return (
      <div className="App">
        <section className="container">
          <header>
            <h1>
              Movie <i className="fas fa-film" /> Tracker
            </h1>
          </header>
          <main>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <h3 className="incorrect-user-info">{error}</h3>
              <input type="submit" value="Login" className="login" />
              <h2>Don't Have An Account?</h2>
              <Link className="form-link" to="/Signup">
                Create Account
              </Link>
            </form>
          </main>
        </section>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  signUserIn: user => dispatch(signUserIn(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
