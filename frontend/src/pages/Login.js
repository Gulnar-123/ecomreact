import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    axios.get('http://localhost:9000/login/' + email + "/" + password).then((response) => {
      if (response.data != null) {
        alert('Login successful')
        localStorage.setItem('emailid', email)
        window.location = "/"
      }
      else
        alert("invalid email or password")
    })
  }
  return (
    <div className='container'>
      <h1 className='text-center'>Login Here</h1>
      <form method='post' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">Password</label>
          <input type="password" className="form-control" id="pass"
            onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}
