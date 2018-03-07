import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email: '' };
    this.changeDisplay = this.changeDisplay.bind(this);
    this.switchToLogIn = this.switchToLogIn.bind(this);
    this.switchToSignUp = this.switchToSignUp.bind(this);
    this.update = this.update.bind(this);
    this.handlesubmitlogout = this.handlesubmitlogout.bind(this);
    this.handlesubmitnewuser = this.handlesubmitnewuser.bind(this);
  }

  changeDisplay(id) {
    let allErrors = Array.prototype.slice.call(
      document.querySelectorAll('.single-session-error')
    );
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = '';
    }
    if (document.getElementById(id)) {
      if (document.getElementById(id).style.display === 'flex') {
        document.getElementById(id).style.display = 'none';
      } else {
        document.getElementById(id).style.display = 'flex';
      }
    }
  }

  update(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  handlesubmitlogin(e) {
    e.preventDefault();
    let allErrors = Array.prototype.slice.call(
      document.querySelectorAll('.single-session-error')
    );
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = '';
    }

    let user1 = {
      username: this.state.username,
      password: this.state.password
    };
    return this.props.loginuser(user1).then(response => {
      this.setState({ username: '', password: '' });
      return this.props.history.push('./profile');
    });
  }

  handlesubmitlogout(e) {
    e.preventDefault();
    return this.props.logoutuser().then(user => {
      return this.props.history.push('./home');
    });
  }

  handlesubmitnewuser(e) {
    e.preventDefault();
    let allErrors = Array.prototype.slice.call(
      document.querySelectorAll('.single-session-error')
    );
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = '';
    }
    return this.props.createuser(this.state).then(response => {
      this.setState({ username: '', password: '', email: '' });
      return user => this.props.history.push('./profile');
    });
  }

  switchToSignUp() {
    let allErrors = Array.prototype.slice.call(
      document.querySelectorAll('.single-session-error')
    );
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = '';
    }
    if (document.getElementById('id02')) {
      document.getElementById('id02').style.display = 'none';
      document.getElementById('id01').style.display = 'flex';
    }
  }

  switchToLogIn() {
    let allErrors = Array.prototype.slice.call(
      document.querySelectorAll('.single-session-error')
    );
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = '';
    }
    if (document.getElementById('id01')) {
      document.getElementById('id01').style.display = 'none';
      document.getElementById('id02').style.display = 'flex';
    }
  }

  render() {
    let display;
    if (
      this.props.currentUser &&
      Object.keys(this.props.currentUser).length > 0
    ) {
      display = (
        <div className="if-logged-in-wrap">
          <Link className="create-contract-button" to="/contract">
            Create Contract
          </Link>
          <Link className="nav-current-user"
            to="/profile">

            {this.props.currentUser.username}
          </Link>
          <button
            className="logout-button"
            onClick={e => this.handlesubmitlogout(e)}
          >
            Logout
          </button>
        </div>
      );
    } else {
      display = (
        <div className="logged-out-nav">
          <div className="main-nav">
            <Link className="create-contract-button" to="/contract">
              Create Contract
            </Link>

            <button
              id="login-effects"
              className="cd-signup"
              onClick={() => this.changeDisplay('id02')}
            >
              Log In
            </button>

            <button
              id="nav-bar-signup"
              className="cd-signup"
              onClick={() => this.changeDisplay('id01')}
            >
              Sign Up
            </button>
          </div>

          <div id="id01" className="modal">
            <form className="modal-content">
              <div className="container">
                <span
                  onClick={() => this.changeDisplay('id01')}
                  className="close"
                  title="Close Modal"
                >
                  X
                </span>
                <h1>Sign Up</h1>
                <hr />
                <ul className="session-errors">
                  {this.props.errors
                    ? this.props.errors.map((error, i) => (
                        <li className="single-session-error" key={i}>
                          {error}
                        </li>
                      ))
                    : null}
                </ul>
                <label>
                  <b>Username</b>
                </label>
                <input
                  autoFocus
                  type="text"
                  placeholder="Enter Username"
                  name="email"
                  onChange={this.update('username')}
                  required
                />

                <label>
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="psw"
                  onChange={this.update('email')}
                  required
                />

                <label>
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw-repeat"
                  onChange={this.update('password')}
                  required
                />

                <div className="clearfix">
                  <button
                    type="submit"
                    className="signup"
                    onClick={e => this.handlesubmitnewuser(e)}
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    onClick={() => this.changeDisplay('id01')}
                    className="cancelbtn"
                  >
                    Cancel
                  </button>
                </div>

                <div className="form-last-line">
                  <button type="button" className="demobtn">
                    Demo
                  </button>

                  <p className="alternative-option">
                    Already have an account?{' '}
                    <a
                      id="log-in-instead"
                      href="#"
                      onClick={this.switchToLogIn}
                      style={{ color: '#c24e04d4' }}
                    >
                      Log In
                    </a>.
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div id="id02" className="modal">
            <form className="modal-content">
              <div className="container">
                <span
                  onClick={() => this.changeDisplay('id02')}
                  className="close"
                  title="Close Modal"
                >
                  X
                </span>
                <h1>Log In</h1>
                <hr />
                <ul className="session-errors">
                  {this.props.errors
                    ? this.props.errors.map((error, i) => (
                        <li className="single-session-error" key={i}>
                          {error}
                        </li>
                      ))
                    : null}
                </ul>
                <label>
                  <b>Username</b>
                </label>
                <input
                  autoFocus
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.update('username')}
                  required
                />

                <label>
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  required
                  onChange={this.update('password')}
                />

                <div className="clearfix">
                  <button
                    type="submit"
                    className="signup"
                    onClick={e => this.handlesubmitlogin(e)}
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    onClick={() => this.changeDisplay('id02')}
                    className="cancelbtn"
                  >
                    Cancel
                  </button>
                </div>

                <div className="form-last-line">
                  <button type="button" className="demobtn">
                    Demo
                  </button>

                  <p className="alternative-option">
                    Don't have an account?{' '}
                    <a
                      id="sign-up-instead"
                      href="#"
                      onClick={this.switchToSignUp}
                      style={{ color: '#c24e04d4' }}
                    >
                      Sign Up
                    </a>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="wrap-nav-and-info">
          <div className="nav-bar">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="logo-title-wrap">
                <img
                  src="http://res.cloudinary.com/aazaiez/image/upload/v1519269426/logo_3_LT_sknvf1.svg"
                  className="LeanTerms-logo-white"
                />
                <div>LeanTerms</div>
              </div>
            </Link>
          </div>
          {display}
        </div>
      </div>
    );
  }
}

export default Navbar;
