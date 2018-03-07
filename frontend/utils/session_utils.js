export const CreateUser = (user) =>
  $.ajax({
      method: 'POST',
      url: '/api/signup',
      data: {
          username: user.username,
          password: user.password,
          email: user.email
      }
  });

export const Logout = () =>
    $.ajax({
        method: 'GET',
        url: '/api/logout'
    });


export const Login = (user) =>
    $.ajax({
        method: 'POST',
        url: '/api/login',
        data: {
          username: user.username,
          password: user.password,
          email: user.email
    }});
