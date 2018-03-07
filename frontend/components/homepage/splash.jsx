import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';


class Splash extends  React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(

          <div className="homepage-wrap0">
          <div className="homepage-wrap">
          <ul className="homepage-intro">
              <li>
                <h1 className="welcome-page-message">Lease Contracts</h1>
                <h2 id="redefined" className="welcome-page-message">Redefined</h2>
              </li>
              <li>
                <p >Create, share, and sign a free customized lease contract in minutes.</p>
              </li>
          </ul>

          <div className="homepage-link-wrapper">
            <Link
              style={{ textDecoration: 'none'}}
              className="start-contract-button"
              id="start-contract-button"
              to="/contract">
              Start Drafting Your Contract Now
            </Link>
          </div>


          </div>
          </div>
        );
    }

}


export default Splash;
