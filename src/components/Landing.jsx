import logo from "../Assets/Artboard 2 (1).png"; 
import React from 'react';
import  '../App.css'
import { Link } from "react-router-dom";

function Landing() { 
    return( 
        <section id="hero">
        <div class="hero-container"> 
          <img src={logo} alt="" class="hero-logo"/>
          <h1 data-aos="zoom-in">Welcome To DineMate </h1>
          <h2 data-aos="fade-up">Your Favourite Convenience store with a wide range of daily essentials, specialized in on demand delivery. You may <br/>(Currently operating in and around Colombo city limits.)</h2>
          <div class="container">
            <div class="row">
              <div class="col-6">

           <Link to="login">
              <button type="button" class="btn btn-outline-warning" onclick="myFunction()">Menu View</button>
              </Link>

            </div>
              <div class="col-6">

              <Link to="login">
                <button type="button" class="btn btn-outline-warning" onclick="myFunction()">Book Table</button>
                </Link>
    
            </div>
              
            </div>
          </div><br/>
         <h5 class="top">By <b>Dine Mate </b></h5>
        </div>
      </section>    
    )
}
export default Landing;