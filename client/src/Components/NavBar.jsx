import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navbar">
            <Link to="/" className="links">Home </Link>
            <Link to ="/hotels" className="links"> Hotels </Link>
            <Link to ="/flights" className="links">Flights</Link>
            <Link to="/contact" className="links"> Contact Us </Link>
            <Link to="/about" className="links"> About </Link>
            
        </div>
    )
}

