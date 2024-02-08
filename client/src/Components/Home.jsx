import React from "react";
// import planegif from "../assets/plane.gif";
// import hotelsanimation from "../assets/Hotel_animation.gif";
// import mapanimation from "../assets/Main-map-travel-gif.gif";



export default function Home(){
    return(
        <div className="mainSection">
            <h2> Welcome to HappyTravels.io!</h2>
            {/* <img src={mapanimation} alt="map-animation"/> */}
            <div className="homeText">
           <h1>I am Looking For...</h1>
        </div>
        <div className="homeFlights"><h2>Flights</h2>
        {/* <img src={planegif} alt="plane-gif"/> */}
        </div>
        <div className="homeHotels"><h2>Hotels</h2>
        {/* <img src={hotelsanimation} alt="hotels-animation"/> */}
        </div>
        </div>

       
    )
}

