import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark mb-4 shadow">
            <div className="container">
                <Link to="/" className="navbar-brand">MoviesInfoApp</Link>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-block">
                        <a href="https://www.omdbapi.com/" target="_blank" style={{ color: "#ffc107" }}><i className="fab fa-imdb fa-5x" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
