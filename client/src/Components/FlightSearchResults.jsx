import React from "react";

export default function FlightSearchResults({ results }) {
  return (
    <div className="flight-search-results">
      <h2>Flight Search Results</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.departure} to {result.arrival}, Outbound: {result.outboundDate}, Return: {result.returnDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


