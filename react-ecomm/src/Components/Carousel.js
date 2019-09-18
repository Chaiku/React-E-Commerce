import React from 'react';
import '../App.css';
import img1 from '../Assets/Accessories/glasses_1.jpg';
import img2 from '../Assets/Accessories/glasses_2.jpg';
import img3 from '../Assets/Accessories/glasses_3.jpg';
import img4 from '../Assets/Accessories/glasses_4.jpg';


const Carousel = (props) => (
   <div className="container-fluid carouselContainer">
       <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
           <div id="navCarousel" className="carousel slide" data-ride="carousel" data-interval="9000">
               <ol className="carousel-indicators">
                   <li data-target="#navCarousel" data-slide-to="0" className="active"></li>
                   <li data-target="#navCarousel" data-slide-to="1"></li>
                   <li data-target="#navCarousel" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                   <div className="carousel-item active">
                       <img className="d-block w-100" src={img1} alt="First slide"></img>
                   </div>
                   <div className="carousel-item">
                       <img className="d-block w-100" src={img2} alt="Second slide"></img>
                   </div>
                   <div className="carousel-item">
                       <img className="d-block w-100" src={img3} alt="Third slide"></img>
                   </div>
                   <div className="carousel-item">
                       <img className="d-block w-100" src={img4} alt="Fourth slide"></img>
                   </div>
               </div>
               <a className="carousel-control-prev" href="#navCarousel" role="button" data-slide="prev">
                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#navCarousel" role="button" data-slide="next">
                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                   <span className="sr-only">Next</span>
               </a>
           </div>
       </nav>
   </div>
);
export default Carousel;