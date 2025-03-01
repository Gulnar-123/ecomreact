import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
    var em = localStorage.getItem('emailid')
    var utype = localStorage.getItem("usertype")
    function logout() {
        localStorage.removeItem('emailid')
        window.location = "/"
    }
    function alogout() {
        localStorage.removeItem('aemailid')
        localStorage.removeItem("usertype")
        window.location = "/"
    }
    if (em == null && utype == null) {
        return (

            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">E Commerce</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/men">Men</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/women">Women</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/kids">Kids</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/alogin">Admin Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>

        )
    }
    else {

        if (utype == null) {
            return (

                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">E Commerce</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/men">Men</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/women">Women</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/kids">Kids</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/viewcart">View Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/ohistory">Order History</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => logout()}>Logout</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>

            )
        }
        else {
            return (

                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">E Commerce</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/addproduct">Add Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/vieworders">View Orders</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={() => alogout()}>Logout</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>

            )
        }
    }

}
