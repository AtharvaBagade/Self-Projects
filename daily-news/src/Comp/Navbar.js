import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/general">
                        <img src="https://previews.123rf.com/images/enterline/enterline1611/enterline161100174/66186682-the-word-news-written-in-white-3d-letters-on-a-colorful-background-concept-and-theme.jpg" alt="Daily News" width="40" height="40" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/general">General</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        )
    }
}
