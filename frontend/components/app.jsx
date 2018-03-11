import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavbarContainter from './navbar/navbar_container';
import Splash from './homepage/splash';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import ContractShowContainer from './contract/contract_show_container';
import ContractFormContainer from './contract_form_container';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-div-wrapper">
          <Route path="/" component={NavbarContainter}/>
          <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute path="/contract/:id" component={ContractShowContainer}/>
            <ProtectedRoute path="/contract" component={ContractFormContainer} />
            <Redirect to="/" />
          </Switch>
      </div>
    );
  }
}

export default App;
