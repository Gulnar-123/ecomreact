import axios from 'axios'
import React, { useState } from 'react'

export default function Register() {
    var [name, setName] = useState('')
    var [address, setAddress] = useState('')
    var [contact, setContact] = useState('')
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:9000/createuser', {
            name: name,
            address: address,
            contact: contact,
            email: email,
            password: password
        }).then((response) => {
            alert(response.data["message"])
        })
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Register Here</h1>
            <form method='post' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nm" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nm" aria-describedby="emailHelp"
                        onChange={(e) => setName(e.target.value)} value={name} />
                    <div id="emailHelp" className="form-text">Enter Name Here.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="addr" className="form-label">Address</label>
                    <input type="text" className="form-control" id="addr"
                        aria-describedby="emailHelp" onChange={(e) => setAddress(e.target.value)}
                        value={address} />
                    <div id="emailHelp" className="form-text">Enter address Here</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="con" className="form-label">Contact</label>
                    <input type="number" className="form-control" id="con" aria-describedby="emailHelp"
                        onChange={(e) => setContact(e.target.value)} value={contact} />
                    <div id="emailHelp" className="form-text">Enter Contact Number.</div>

                </div>
                <div className="mb-3">
                    <label htmlFor="em" className="form-label">Email </label>
                    <input type="email" className="form-control" id="em" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    <div id="emailHelp" className="form-text">Enter Email Here.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pw" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pw"
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
