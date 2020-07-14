import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {signup, authenticate, isAuthenticated} from '../auth'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  })

  const {name, email, password, loading, error, redirectToReferrer} = values
  const {user} = isAuthenticated()

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({...values, error: false, loading: true})
    signup({name, email, password})
    .then(data => {
      if(data.error) {
        setValues({...values, error: data.error, loading: false})
      } else {
        authenticate(data, () => {
            setValues({
                ...values,
                redirectToReferrer: true,
                loading: false
              })
        })
      }
    })
  }

  const signUpForm = () => (
    <div>
    <div style={{
      height: '100px',
      backgroundColor: "#000",
      opacity: 0.75
  }}>

</div>
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-t-50 p-b-90">
				<form className="login100-form validate-form flex-sb flex-w">
					<span className="login100-form-title p-b-51">
						Sign in
					</span>

          <div className="wrap-input100 validate-input m-b-16" >
						<input className="input100" type="text" onChange={handleChange('name')} value={name} placeholder="Name"/>
						<span className="focus-input100"></span>
					</div>

                    <div className="wrap-input100 validate-input m-b-16">
						<input className="input100" type="email" onChange={handleChange('email')} value={email} placeholder="Email"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-16">
						<input className="input100" type="password" onChange={handleChange('password')} value={password} placeholder="Password"/>
						<span className="focus-input100"></span>
					</div>
          {showError()}
          {showLoading()}
					<div className="container-login100-form-btn m-t-17">
						<button onClick={clickSubmit} className="login100-form-btn">
							Submit
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
  </div>

  )

  const showError = () => (
    <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
      {error}
    </div>
  )

  const showLoading = () => (
    loading && (<div className="alert alert-info"><h3>Loading...</h3></div>)
  )


  return (
    <div>
    {signUpForm()}
    </div>
  )
}

export default Signup;
