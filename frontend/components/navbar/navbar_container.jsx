import {connect} from 'react-redux';
import Navbar from './navbar';
import {withRouter} from 'react-router-dom';
import {
  signup,
  login,
  logout,
  clearErrors
} from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session
});


const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(login(user)),
  logoutUser: () => dispatch(logout()),
  createUser: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Navbar));
