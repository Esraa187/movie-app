import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-transparent">
                <div className="container-fluid ">
                    <a className="navbar-brand text-light" >Imovie</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {props.us ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-light" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="movies">Movies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="people">Popular Actors</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="tv">Tv Shows</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link text-light" to="about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="contacts">Contacts</Link>
                                    </li> */}
                                </> : ""}
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {props.us ?
                                <>
                                    <Dropdown >
                                        <Dropdown.Toggle style={{backgroundColor:"#024CAA",border:"none"}} id="dropdown-basic">
                                        <i className="fa-solid fa-user"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">{props.us.first_name} {props.us.last_name}</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">{props.us.email}</Dropdown.Item>
                                            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <li className="nav-item">
                                        <span className="nav-link text-light" onClick={props.logout}>Logout</span>
                                    </li>
                                </>

                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active text-light" to="login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to="register">Register</Link>
                                    </li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
