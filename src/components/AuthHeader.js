import React from 'react';
import { withRouter } from 'react-router-dom';
import { Auth } from './Auth';

const logout = (history) => {
  Auth.logout()
  .then(() => {
    history.push('/');
  })
  .catch(err => console.error(`Error: ${err}`));  
};

const AuthHeader = ({ history }) => {
  if (Auth.isAuthenticated) {
    return (
      <div>
        <h2>Welcome back!</h2>
        <button onClick={() => logout(history)}>
          Logout
        </button>        
      </div>  
    );
  }

  return "";
};

export default withRouter(AuthHeader);