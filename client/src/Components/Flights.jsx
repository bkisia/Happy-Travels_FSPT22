import React from "react";
import FlightSearch from "./FlightSearch";
// import flightsgif from "../assets/Flightscomponentgif.gif";


export default function Flights(){
    return(
        <div className="flightsMainSection">
           <h2> <b>Search Flights</b></h2>
            {/* <img src={flightsgif} alt="flights-gif"/>  */}

            <FlightSearch/>
            


        </div>
    )


}