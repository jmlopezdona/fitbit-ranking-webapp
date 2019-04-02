import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import './Login.css';
import FitbitLogo from '../../assets/images/fitbitLogo.png';

export class Login extends Component {
  constructor() {
    super();
  }

  render() {
      return (
        <div className="login-container">
          <span className="logo-icon-container">
            <span className="logo-client-icon"></span>
          </span>
          <hr/>
          <div className="header">
              <h1>Acceso a Solera España Challenge</h1>
              <a className="fitbit-button" href="/login"><img src={FitbitLogo} alt="Login en Fitbit"></img></a>
          </div>
          <hr/>
        </div>
      )
  };
}

function mapStateToProps(state) {
  return { login: state.login };
};
  
export default  connect(mapStateToProps)(Login);