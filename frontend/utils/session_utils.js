export const CreateUser = (user) =>(
  $.ajax({
      method: 'POST',
      url: '/api/signup',
      data: user
  })
);

export const Logout = () =>(
    $.ajax({
        method: 'GET',
        url: '/api/logout'
    })
);

export const Login = (user) =>(
    $.ajax({
        method: 'POST',
        url: '/api/login',
        data: user
    })
);

export const CurrentUser = () =>(
    $.ajax({
        method: 'GET',
        url: '/api/current_user'
    })
);
