import {connect} from 'react-redux';
import Navbar from './navbar';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Navbar));
