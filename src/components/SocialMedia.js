import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"; 
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  return (
    <div className='container'>
      <div className=" justify-content-end px-5 my-md-3 row" >
        <ul className='col-md-4'/>
        <ul className="navbar-nav col-md-4 align-items-center ml-auto d-flex justify-content-evenly" style={{flexDirection: "row"}}>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-brand" to="/">
             <FontAwesomeIcon className='fa-2x' icon={faYoutube} />
             
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-brand" to="/">
             <FontAwesomeIcon className='fa-2x'icon={faInstagram} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-brand" to="/">
             <FontAwesomeIcon className='fa-2x'icon={faTwitter} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-brand" to="/">
             <FontAwesomeIcon className='fa-2x'icon={faLinkedin} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fw-bold text-brand" to="/">
           <FontAwesomeIcon className='fa-2x'icon={faFacebook} />
            </Link>
          </li>
        </ul>
        <ul className='col-md-4'/>

      </div>
    </div>
  )
}

export default SocialMedia;
