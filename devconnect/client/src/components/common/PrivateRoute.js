import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//doubt (did not understand clearly)

const PrivateRoute= ({component:Component,auth,...rest}) => {
  return (
      <Route
      {...rest}
      remder={
          props=>auth.isAuthenticated===true?(
              <Comment{...props}/>
          ):(
              <Redirect to ="/login"/>
          )
      }
      />
  )
}
PrivateRoute.propTypes={
    auth:PropTypes.object.isRequired
};
const mapStatToProps=state=>({
    auth:state.auth,

});
export default connect(mapStatToProps)(PrivateRoute);