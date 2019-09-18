import React from 'react';
import '../App.css';

function NavHeader () {
    return(
        <div>
            <nav className="navbar navbar-expand-lg" id="mainNav">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="mens.html">
                Mens
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="womens.html">
                Womens
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">
                About
              </a>
            </li>
          </ul>

          <a class="navbar-brand" id="logo" href="index.html"></a>

          <form className="form-inline my-2 my-lg-0">
            <a className="nav-link" href="#">Cart</a>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className=" btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

        </div>
      </nav>
        </div>
    )
}

export default NavHeader;