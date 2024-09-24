import React, { useState } from "react";
import FlightSearch from "./components/FlightSearch";
import FlightResults from "./components/FlightResults";

const App = () => {
  const [flights, setFlights] = useState([]);
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");

  const handleSearch = async (searchParams) => {
    try {
      setDepartureAirport(searchParams.departureAirport);
      setArrivalAirport(searchParams.arrivalAirport);

      const requestBody = {
        origin: searchParams.departureAirport,
        destination: searchParams.arrivalAirport,
        departureDate: searchParams.departureDate.toISOString(),
      };

      const response = await fetch("http://localhost:5163/api/Flights/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      setFlights(
        data.Body.AvailabilitySearchResponse.AvailabilitySearchResult
          .FlightOptions
      );
    } catch (error) {
      console.error("Uçuş arama sırasında bir hata oluştu:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Uçuş Arama
        </h1>
        <FlightSearch onSearch={handleSearch} />
        <FlightResults
          flights={flights}
          departureAirport={departureAirport}
          arrivalAirport={arrivalAirport}
        />
      </div>
    </div>
  );
};

export default App;
