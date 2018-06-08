import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export const Auth = {  
  isAuthenticated: false,
  login() {
    return new Promise((resolve, reject) => {
      this.isAuthenticated = true;
      setTimeout(resolve(this.isAuthenticated), 100);
    });   
  },
  logout() {
    return new Promise((resolve, reject) => {
      this.isAuthenticated = false;
      setTimeout(resolve(this.isAuthenticated), 100);
    });
  }
};




class Login extends Component {
  state = {
    isLoggedIn: false
  };

  login = () => {
    Auth.login()
      .then(() => {
        this.setState({ 
           isLoggedIn: true
        });    
        console.log('logged In');
      })
      .catch(err => console.error(`Error: ${err}`));
  }
  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) return  <Redirect to="/private" />

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login;