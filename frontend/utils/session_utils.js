export const CreateUser = (user) =>(
  $.ajax({
      method: 'POST',
      url: '/api/signup',
      data: user
  })
);


