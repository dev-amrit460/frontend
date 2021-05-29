import React from 'react'
import phone from "./assets/phone.svg"
import navIcon from "./assets/icon.png";

const Nav = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <span id="logo"></span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon"><img src={navIcon} alt=""></img></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a id="about" className="nav-link" href="#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">SERVICES</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#about">RESOURCES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#about">CAREERS</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#about">HOME CARE HEROES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">CONTACT</a>
              </li>
            </ul>
            <span className="tel">
                <img id="phoneIcon" src={phone} alt=""></img>
                <span id="mobile">866-986-3356</span>
              </span>
          </div>
        </nav>
        </div>
    )
}

export default Nav
