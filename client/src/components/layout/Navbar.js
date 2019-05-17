import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../Actions/Auth';
import {Link} from 'react-router-dom';
const Navbar = ({auth:{isAuthenticated,loading},logout}) => {

  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
        <i className='fas fa-sign-out-alt'/> { ' ' }
        <span className="hide-sm">Logout</span></a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <a href="#!"> Developers </a>
      </li>
      <li>
        <Link to='/Register'>Register</Link>
      </li>
      <li>
        <Link to='/Login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> DevConnector</a>
      </h1>
     {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
    </nav>
  )
}
const mapStateToProps =(state) =>({
  auth: state.auth
})

export default connect(mapStateToProps,{logout})(Navbar);
