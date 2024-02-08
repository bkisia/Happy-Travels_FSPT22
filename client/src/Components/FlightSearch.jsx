import React, { useState } from "react";
import { getJson } from "serpapi";


import FlightSearchForm from "./FlightSearchForm";
import FlightSearchResults from "./FlightSearchResults";

export default function FlightSearch() {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleFlightSearch = async (departure, arrival, outboundDate, returnDate) => {
    try {

      // test first 
      //  we do the API fetch here
      // make the API request and update setSearchResults with the fetched data.
      

      // const testResponse = await getJson({
      //   engine: "google",
      //   api_key: API_KEY, **Get your API_KEY from https://serpapi.com/manage-api-key **
      //   q: "coffee",
      //   location: "Austin, Texas",
      // });
      // console.log(testResponse);

      const API_KEY = "8373ca85be4abaafb76d31c521869fbab1bf9f3eb325d3d168992ffc1bf88e42"

      const apiEndpoint = `https://serpapi.com/search.json?engine=google_flights&departure_id=${departure}&arrival_id=${arrival}&outbound_date=${outboundDate}&return_date=${returnDate}&currency=USD&hl=en&api_key=${API_KEY}`;

      // the data Fetch for the API 
      const response = await fetch(apiEndpoint);
      const data = await response.json();

      
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching flight data:", error);
      setSearchResults([]);
    }
  };

  return (
    <div className="flight-search">
      <FlightSearchForm onSearch={handleFlightSearch} />
      <FlightSearchResults results={searchResults} />
    </div>
  );
}

 
