import React from 'react';
import { 
  BrowserRouter,
  Link,
  Route,
  Redirect
 } from 'react-router-dom';

import PublicPage from './PublicPage';
import PrivatePage from './PrivatePage';
import LoginPage, { Auth } from './Auth';
import AuthHeader from './AuthHeader';

const PrivateRoute = ({ component: Component, ...rest }) => {  
  return <Route 
            {...rest} 
            render={(props) => (
              Auth.isAuthenticated === true
              ? <Component {...props} />
              : <Redirect to={{
                  pathname: '/login',
                  state: { from: props.location }
                }} />
            )} 
          />;
};

const Routes = (props)  => {
  return (
    <BrowserRouter>
      <div>
        <ul className="inline-list">
          <li> <Link to="/public">Public Page</Link> </li>
          <li> <Link to="/private">Private Page</Link> </li> 
        </ul>
        <AuthHeader/>
        <Route path="/public" component={PublicPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path='/private' component={PrivatePage} />
      </div>
    </BrowserRouter>
  )
};

export default Routes;