import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PorpTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser, loginUser} from '../../actions/authActions';

class Navbar extends Component {
  render() {
    const {isAuthenticated,user} =this.props.auth;
    return (
      <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
              <div className="container">
                <Link to="/" className="navbar-brand" >DevConnector</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                  <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="profiles.html"> Developers
                    </a>
                  </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" >Login</Link>
                   </li>
                </ul>
              </div>
            </div>
      </nav>
      </div>
    )
  }
}
Navbar.PorpTypes={
  logoutUser: PorpTypes.func.isRequired,
  auth:PorpTypes.object.isRequired
}
const mapStateToProps=(state)=>({
  auth:state.auth
})
export default connect(mapStateToProps, {logoutUser})(Navbar);

