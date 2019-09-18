import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FreshCarousel from './Components/Carousel.js';



function App() {
  return (
    <div>
    <header>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet"></link>

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
    </header>

    <div className="container-fluid">

      <div className="row" id="products">
          <div className="col" id="shades">
              <div id="mensWear">
                  <p>Womens Glasses</p>
                  <a href="womens.html"><button clasName="btn btn-dark btn-lg">Shop Now</button></a>
              </div>
          </div>
          <div className="col" id="access">
              <div id="womensWear">
                  <p>Mens Accessories</p>
                  <a href="mens.html"><button type="button" className="btn btn-dark btn-lg">Shop Now</button></a>
              </div>
          </div>
        </div>

        <div className="floatBorder"></div>

        <div className="row" id="trendBanner">
            <div className="col">
                <span id="leftTrend">TRENDING NOW</span>
                <span id="rightTrend">TRENDING NOW</span>
            </div>
          </div>
          
          <FreshCarousel />

          <div className="floatBorder"></div>

          <div className="instaBox">
            <h1>@FreshFeelz</h1>
            <table>
            </table>
          </div>
      </div>
    </div>
  );
}

export default App;
