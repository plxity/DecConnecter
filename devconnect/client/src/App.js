import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';
import store from './store';
import './App.css'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Layout/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decode = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decode));
}
class App extends Component{
    render(){
        return(
        <Provider store={store}>
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Landing}/>
                <div className="container">
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </div>
                <Footer/>
            </div>
        </Router>
        </Provider>
        )
    }
}
export default App;