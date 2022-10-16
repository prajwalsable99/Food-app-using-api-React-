
// rcfp
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className=''>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark px-1">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">foodie-app</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/SeaFood">Seafood</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Breakfast">Breakfast</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Dessert">Dessert</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Chicken">Chicken</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Pasta">Pasta</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Vegetarian">Vegetarian</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Side">Side</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
// rcfp

  }
}

export default Navbar
