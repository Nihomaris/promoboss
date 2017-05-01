import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse header-admin">
          <div className="container-fluid header-admin__container">
            <div className="navbar-header header-admin__logo">
              
              <Link to="/">
                <div className="navbar-brand">
                  <img src="/logo.png" alt="logo" />
                </div>
              </Link>

            </div>
            <div className="collapse navbar-collapse header-admin__links" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/order.create">New order</Link>
                </li>
                <li><Link to="/">Order list</Link></li>
                <li><Link to="/archive">Archive</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;