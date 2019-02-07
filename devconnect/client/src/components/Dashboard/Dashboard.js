import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profilesAction';
import store from '../../store';

class Dashboard extends Component {
    componentDidMount(){
        store.dispatch(getCurrentProfile())
    }
  render() {
    return (
      <div>
          <h1>Dashboard</h1>
      </div>
    )
  }
}
export default Dashboard;