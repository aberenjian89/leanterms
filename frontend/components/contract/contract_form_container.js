import React from 'react';
import { connect } from 'react-redux';
import ContractForm from './contract_form';
import {
  createContract,
  fetchAllUserContracts
} from '../../actions/contract_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return {
    currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllUserContracts: currentUserID =>
      dispatch(fetchAllUserContracts(currentUserID)),
    createContract: contract => dispatch(createContract(contract))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractForm);
