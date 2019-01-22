import React, { Component } from 'react'
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

 class CreateProfile extends Component {
     constructor(props){
         super(props);
         this.state={
             displaySocialInputs:false,
             handle:'',
             company:'',


         }
     }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
CreateProfile.PropTypes={
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
};
const mapStateToProps= state=>({
    profile:state.profile,
    errors:state.errors
});
export default connect(null)(CreateProfile);
