import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
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

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>

    )


}
