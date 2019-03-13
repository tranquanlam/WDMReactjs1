import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <a className="fontnavbar navbar-brand js-scroll-trigger" href="/">
            <img alt="img" id="logo" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/21616217_1951538581785407_7931691341819326103_n.jpg?_nc_cat=102&_nc_ht=scontent.fdad1-1.fna&oh=ac225c676a8cae8b9f868f590b79fa1b&oe=5C6B626D" />Tran Quan Lam</a>
          <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="fontnavbar collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/login">Sign-in</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">Sign-out</NavLink>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default nav;