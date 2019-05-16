import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../Actions/Auth';
const Navbar = ({logout,isAuthenticated}) => {

  return (

    
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> DevConnector</a>
      </h1>
      <ul>
        <li><a href="profiles.html">Developers</a></li>
        <li><a href="register.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
  )
}
const mapStateToProps =(state) =>({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps,{logout})(Navbar);
