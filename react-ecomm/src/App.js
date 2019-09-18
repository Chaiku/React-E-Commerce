import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FreshCarousel from './Components/Carousel.js';
import NavHeader from './Components/NavHeader.js';



function App() {
  return (
    <div>
    <header>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet"></link>

      <NavHeader />
      
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
