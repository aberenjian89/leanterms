import * as ContractAPI from '../utils/contract_api';

export const RECEIVE_CONTRACT = 'RECEIVE_CONTRACT';
export const RECEIVE_ALL_CONTRACTS = 'RECEIVE_ALL_CONTRACTS';
export const REMOVE_CONTRACT = 'REMOVE_CONTRACT';

export const receiveContract = contract => ({
  type: RECEIVE_CONTRACT,
  contract
});

export const receiveAllContracts = contracts => ({
  type: RECEIVE_ALL_CONTRACTS,
  contracts
});

export const createContract = contract => dispatch => {
  return ContractAPI.createContract(contract).then(createdContract =>
    dispatch(receiveContract(createdContract))
  );
};

export const fetchAllUserContracts = userId => dispatch => {
  return ContractAPI.fetchAllUserContracts(userId).then(serverContracts =>
    dispatch(receiveAllContracts(serverContracts))
  );
};
