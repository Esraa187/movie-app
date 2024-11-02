import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../images/hero-dynamic.jpg';

function Footer() {
    return (
        <>
            <div className='container-fluid foot ' style={{backgroundImage:`url(${bg})`}}>
                <div className="row align-items-center   h-100 ">
                    <div className='col-md-3  ps-5 z-2'>
                        <h3 className='fw-bold'>Imovie</h3>
                        <p className='fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus provident sint, </p>
                        <div>
                            <i className="fa-brands fa-facebook-f me-3"></i>
                            <i className="fa-brands fa-twitter me-3"></i>
                            <i className="fa-brands fa-instagram me-3"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="col-md-3  z-2">
                        <h5 className='mb-3 fw-bold'  >Useful Links</h5>
                        <ul className='p-0 ps-1'>
                            <li className="my-2">
                                <Link to="/" className='fw-semibold'><i className="fa-solid fa-angle-right pe-2"></i>Home</Link>
                            </li>
                            <li className="my-2">
                                <Link to="movies" className='fw-semibold'><i className="fa-solid fa-angle-right pe-2"></i>Movies</Link>
                            </li>
                            <li className="my-2">
                                <Link to="people" className='fw-semibold'><i className="fa-solid fa-angle-right pe-2"></i>People</Link>
                            </li>
                            <li className="my-2">
                                <Link to="tv" className='fw-semibold'><i className="fa-solid fa-angle-right pe-2"></i>Tv</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3  z-2 ">
                        <h5 className='mb-3 fw-bold'>About Us</h5>
                        <ul className='p-1'>
                            <li className='fw-semibold my-2'>FAQ</li>
                            <li className='fw-semibold my-2'>Premium</li>
                            <li className='fw-semibold my-2'>Privacy Policy</li>
                            <li className='fw-semibold my-2'>Recent Release</li>
                        </ul>
                    </div>
                    <div className="col-md-3  z-2 ">
                        <h5 className='mb-3 fw-bold'>Contact Us</h5>
                        <ul className='p-1'>
                            <li className='fw-bold my-2 w-100'>esraa095@gmail.com</li>
                            <li className='fw-bold my-2'>+20 147 8558 55</li>
                            <li className='fw-bold my-2'>Cookies Preferences</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
