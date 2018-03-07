import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email: '', currentForm: ''};
    this.switchDisplay = this.switchDisplay.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.update = this.update.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.state = {
      username: '',
      password: '',
      email: ''
    };

  }

  switchDisplay(formType) {
    this.setState({ username: '', password: '', email: '' });
    this.setState({currentForm: formType});
    let allErrors = Array.prototype.slice.call(
      document.querySelectorAll('.single-session-error')
    );
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = '';
    }
    document.getElementById('id01').style.display = 'flex';
  }

  update(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  handleLogout(e) {
    e.preventDefault();
    return this.props.logoutUser().then(user => {
      return this.props.history.push('./home');
    });
  }

  handleSubmitForm(e) {
    this.renderErrors();
    e.preventDefault();
    this.setState({ username: '', password: '', email: '' });
    let allErrors = Array.prototype.slice.call(
      document.querySelectorAll('.single-session-error')
    );
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = '';
    }
    if (this.state.currentForm === 'Sign Up') {
      return this.props.createUser(this.state).then(response => {
        this.setState({ username: '', password: '', email: '' });
        return user => this.props.history.push('./profile');
      });
    } else {
      let user1 = {
        username: this.state.username,
        password: this.state.password
      };
      return this.props.loginUser(user1).then(response => {
        this.setState({ username: '', password: '' });
        return this.props.history.push('./profile');
      });
    }
  }

  switchForm() {
    this.setState({ username: '', password: '', email: '' });
    let alternative = this.state.currentForm === 'Sign Up' ? 'Log In' : 'Sign Up';
    let allErrors = Array.prototype.slice.call(
      document.querySelectorAll('.single-session-error')
    );
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = '';
    }
    this.switchDisplay(alternative);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    this.props.clearErrors();
  }

  renderErrors() {
    this.props.clearErrors();
      return(
        <ul className="session-errors">
          {this.props.errors.map((error, i) => (
            <li className="single-session-error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
  }
  render() {
    let alternative = this.state.currentForm === 'Sign Up' ? 'Log In' : 'Sign Up';
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
            onClick={e => this.handleLogout(e)}
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
              onClick={() => this.switchDisplay('Log In')}
            >
              Log In
            </button>

            <button
              id="nav-bar-signup"
              className="cd-signup"
              onClick={() => this.switchDisplay('Sign Up')}
            >
              Sign Up
            </button>
          </div>

          <div id="id01" className="modal">
            <form className="modal-content">
              <div className="container">
                <span
                  onClick={() => (document.getElementById('id01').style.display = 'none')}
                  className="close"
                  title="Close Modal"
                >
                  X
                </span>
                <h1 id="formType">{this.state.currentForm}</h1>
                <hr />
                <div>
                  {this.renderErrors()}
                </div>
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
              { this.state.currentForm === 'Sign Up' &&
                <div>
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
                </div>
                }

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
                    onClick={e => this.handleSubmitForm(e)}
                  >
                  {this.state.currentForm}
                  </button>
                  <button
                    type="button"
                    onClick={() => (document.getElementById('id01').style.display = 'none')}
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
                    {this.state.currentForm === 'Sign Up' && 'Already have an account?'
                        ||
                      this.state.currentForm === 'Log In' && "Don't have an account?"
                    }
                    <a
                      id="log-in-instead"
                      href="#"
                      onClick={this.switchForm}
                      style={{ color: '#c24e04d4' }}
                    >
                      {alternative}
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
