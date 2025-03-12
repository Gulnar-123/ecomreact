import axios from 'axios'
import React, { useState } from 'react'

export default function Register() {
    var [name, setName] = useState('')
    var [address, setAddress] = useState('')
    var [contact, setContact] = useState('')
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    var [errors, setErrors] = useState({})
    function handleSubmit(e) {

        e.preventDefault()

        var ane = validate()
        if (Object.keys(ane).length > 0) {
            setErrors(ane)
            alert("Please enter valid details")
        }
        else {

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
    }
    function validate() {
        var er = {}
        if (name.trim() == "") {
            er.name = "Name can not be blank"
        }
        else if (!name.match(/^[a-zA-Z]+$/)) {
            er.name = "Name can contain only alphabets"
        }
        if (address.trim() == "") {
            er.address = "Address can not be blank"
        }
        if (contact.trim() == "") {
            er.contact = "Contact can not be blank"
        }
        else if (!contact.match(/^[6-9][0-9]{9}$/)) {
            er.contact = "Contact must be 10 digits long"
        }
        if (email.trim() == "") {
            er.email = "Email id can not be blank"
        }
        if (password.trim() == "") {
            er.password = "Password can not be blank"
        }
        else if (!password.match(/^[a-zA-Z0-9!@#$%]{8,15}$/)) {
            er.password = "Invalid password"
        }
        return er
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Register Here</h1>
            <form method='post' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nm" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nm" aria-describedby="emailHelp"
                        onChange={(e) => setName(e.target.value)} value={name} />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="addr" className="form-label">Address</label>
                    <input type="text" className="form-control" id="addr"
                        aria-describedby="emailHelp" onChange={(e) => setAddress(e.target.value)}
                        value={address} />
                    {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="con" className="form-label">Contact</label>
                    <input type="number" className="form-control" id="con" aria-describedby="emailHelp"
                        onChange={(e) => setContact(e.target.value)} value={contact} />
                    {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}

                </div>
                <div className="mb-3">
                    <label htmlFor="em" className="form-label">Email </label>
                    <input type="email" className="form-control" id="em" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pw" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pw"
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
