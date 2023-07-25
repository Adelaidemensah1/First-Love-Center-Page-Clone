import React from "react";
import "../App.css";
import logo from "./FL-LOgo.png";
function Navbar() {
    return(
    <div className="Main-element">
        <div className="Navbar"> 
          <div id="page-container">
          <nav class="nav leftside">
          
             <a class="navbar-brand" href="https://firstlovecenter.com/"> 
                <img src={logo} width="50" height="40" 
                alt="First Love Church" id="logo" data-height-percentage="54" data-actual-width="1349" data-actual-height="1011.75"/>
             </a>
    
              
        <div className="nav rightside">
             <a className="nav-link " href="\jesus">JESUS</a>
             <a className="nav-link " href="#whoweare">WHO WE ARE</a>
             <a className="nav-link " href="\global">GLOBAL</a>
             <a className="nav-link " href="\getinvolved">GET INVOLVED</a>
             <a className="nav-link " href="\giving">GIVING</a>
             <a className="nav-link " href="\events">EVENTS</a>
             <a className="nav-link " href="\music">MUSIC</a>
             <a className="nav-link " href="\books">BOOKS</a>
             <a className="nav-link " href="\ourstories">OUR STORIES</a>
             <a className="nav-link " href="\connect">CONNECT</a>
             <a className="nav-link " href="\location">LOCATION</a>

       </div>
           
        
       </nav>
       </div>
            
        </div>
        
        </div>
        
        
    )
    
}

export default Navbar;
