import React,{Fragment, useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../../Actions/alert';
import {registerUser} from '../../Actions/Auth';
import {Redirect} from 'react-router-dom';
import Alert from '../../components/layout/alert';

const Register = ({setAlert,registerUser,isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const {name,email,password,password2}= formData;
    const onchange = e => setFormData({...formData, [e.target.name]:e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        if(password !== password2)
        setAlert("Password doesn't match",'danger')
        else{
            registerUser({name,email,password})
        }
    }

    if(isAuthenticated){
      return <Redirect to='/Dashboard' />
    }

  return (

    <Fragment>
      <Alert/>
       <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name"  value={name} onChange={e=>onchange(e)} className="input-field" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address"  name="email" value={email} onChange={e=>onchange(e)} />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
           
            onChange={e=>onchange(e)}
            value={password}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            
            name="password2"
            
            onChange={e=>onchange(e)}
            value={password2}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  isAuthenticated : state.auth.isAuthenticated
})
export default connect(mapStateToProps,{setAlert,registerUser})(Register);
