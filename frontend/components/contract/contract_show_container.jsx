import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ShowContract from './contract_show';

const mapStateToProps = state => (
    {

    }
);


const mapDispatchToProps = dispatch =>(
    {

    }
);

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ShowContract));
