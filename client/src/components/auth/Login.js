import React,{Fragment, useState} from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })
    const {email,password}= formData;
    const onchange = e => setFormData({...formData, [e.target.name]:e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        console.log(formData);
       }

  return (
    <Fragment>
       <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign In to your acoount</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onchange(e)} />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            onChange={e=>onchange(e)}
            value={password}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </Fragment>
  )
}

export default Register
