import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profilesAction';
import store from '../../store';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    componentDidMount(){
      this.props.getCurrentProfile()
    }
  render() {
      const {user}= this.props.auth;
      const {profile,loading}= this.props.profile;
      let DashboardContent;
      if(profile == null || loading){
        DashboardContent =<h4>Loading...</h4>
      }
      else{
        if(Object.keys(profile)>0){
            DashboardContent =<h4>Display user profile</h4>
        }
        else{
            DashboardContent = (
                <div>
                    <p className="lead text-muted">Welcome {user.name}</p>
                    <p>You dont have a profile, Please add some info</p>
                    <Link to="/create-profile" className="btn btn-lg btn-info">Create Profile</Link>
                </div>
            )
        }
      }
    return (
      <div className="dashboard">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4">Dashboard</h1>
                    {DashboardContent}
                </div>
            </div>
        </div>
    </div>
    )
  }
}
Dashboard.propTypes={
    getCurrentProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired
}
const mapStateToProps =(state)=>({
profile:state.profile,
auth:state.auth
})

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);