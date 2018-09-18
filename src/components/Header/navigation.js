import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle">
        <span className="navbar-toggler-icon">
            <span className="ti ti-align-justify"></span>
        </span>
    </button>
    
    <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">
        <ul className="navbar-nav">                     
            <li className="nav-item"><a className="nav-link menu-link" href="#about">About<span className="sr-only">(current)</span></a></li>
            <li className="nav-item"><a className="nav-link menu-link" href="#why">Why</a></li>
            <li className="nav-item"><a className="nav-link menu-link" href="#benifits">Benifits</a></li>
            <li className="nav-item"><a className="nav-link menu-link" href="#tokenSale">Token Sale</a></li>
            <li className="nav-item"><a className="nav-link menu-link" href="#roadmap">Roadmap</a></li>
            <li className="nav-item"><a className="nav-link menu-link" href="#team">Team</a></li>
            <li className="nav-item"><a className="nav-link menu-link" href="#faq">Faqs</a></li>
            <li className="nav-item"><a className="nav-link menu-link" href="#contact">Contact</a></li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">More</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item menu-link" href="#documents">Documents</a>
                    <a className="dropdown-item menu-link" href="#services">Services</a>
                    <a className="dropdown-item menu-link" href="#partners">Partners</a>
                </div>
            </li>
        </ul>
        <ul className="navbar-btns">
            <li className="nav-item lang-switch">
                <a className="" href="#" data-toggle="dropdown">English <em className="ti ti-angle-down"></em></a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">French</a>
                    <a className="dropdown-item" href="#">Chinese</a>
                    <a className="dropdown-item" href="#">Hindi</a>
                </div>
            </li>
            <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="#">JOIN PRE-SALE</a></li>
            <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="#">TRY ICO</a></li>
        </ul>
    </div>
  </div>
)

export default Navigation
