import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getCurrentProfile }from '../../actions/profileActions';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

 class Dashboard extends Component {
   componentDidMount(){
     this.props.getCurrentProfile();
   }
  render() {
    const {user}= this.props.auth;
    const {profile,loading}=this.props.profile;
    let dashboardContent;
    if(profile===null ||loading){
      dashboardContent=<h4>Loading...</h4>
    }
    else{
      if(Object.Keys(profile).length>0){
        dashboardContent=<h4>Display profile</h4>
      }
      else{
        dashboardContent=(
          <div>
            <p className="lead text-muted"> Welcome {user.name}
              </p>
          <p>You have not created a profile yet, please click on button</p>
          <Link to="/create-profile" className="btn btn=lg btn-info"/>
          </div>
        )
      }

    }
    return (
      <div className="dashboard">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4"> Dashboard
                    {dashboardContent}
                      </h1>
                  </div>
                </div>
              </div>
        
      </div>
    )
  }
}
Dashboard.propTypes={
  getCurrentProfile: PropTypes.func.isRequired,
  profile:PropTypes.object.isRequired,
  auth:PropTypes.object.isRequired

};
const mapStateToProps= (state)=>({
profile:state.profile,
auth:state.auth,

});
export default connect(mapStateToProps ,{getCurrentProfile})(Dashboard);
