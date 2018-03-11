export const fetchAllUserContracts = userId =>
  $.ajax({
    url: `/api/${userId}/contracts`
  });

export const createContract = data =>
  $.ajax({
    method: 'POST',
    url: '/api/contracts',
    data
  });

export const showContract = ContractId =>
  $.ajax({
    method: 'GET',
    url: `/api/contracts/${ContractId}`
  });

export const updateContract = (data, ContractId) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/contracts/${ContractId}`,
    data
  });

export const deleteContract = ContractId =>
  $.ajax({
    method: 'DELETE',
    url: `/api/contracts/${ContractId}`
  });
