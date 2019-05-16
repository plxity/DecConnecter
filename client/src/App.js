import React,{Fragment, useEffect}from 'react'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import {loaduser} from '../src/Actions/Auth'
import setAuthToken from '../src/Utils/setToken';
import Alert from '../src/components/layout/alert';

if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(()=>{
    store.dispatch(loaduser());
  },[])
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
      <Navbar/>
      <Route exact path='/' component ={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/Login" component={Login} />
        </Switch>
      </section>
    </Fragment>
    </Router>
    </Provider>
  )
}

export default App
