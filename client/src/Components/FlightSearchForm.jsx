import React, { useState } from "react";

export default function FlightSearchForm({ onSearch }) {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [outboundDate, setOutboundDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = () => {
    onSearch(departure, arrival, outboundDate, returnDate);
  };

  return (
    <div className="flight-search-form">
      <h2>Search Flights</h2>
      <form>
        <div className="form-group">
          <label htmlFor="departure">Departure:</label>
          <input
            type="text"
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrival">Arrival:</label>
          <input
            type="text"
            id="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="outboundDate">Outbound Date:</label>
          <input
            type="date"
            id="outboundDate"
            value={outboundDate}
            onChange={(e) => setOutboundDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleSearch}>
          Search Flights
        </button>
      </form>
    </div>
  );
}


