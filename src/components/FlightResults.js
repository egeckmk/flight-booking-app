import React from "react";

const FlightResults = ({ flights, departureAirport, arrivalAirport }) => {
  if (!flights || flights.length === 0) {
    return <p className="text-center text-gray-500">Sonuç bulunamadı.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Uçuş Sonuçları</h2>
      <ul>
        {flights.map((flight, index) => (
          <li
            key={index}
            className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 mb-4"
          >
            <div className="flex justify-between items-center">
              <div className="text-left">
                <p className="text-2xl font-bold">
                  {new Date(flight.DepartureDateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-lg font-semibold">{departureAirport}</p>
                <p className="text-sm text-gray-500">Kalkış Yeri</p>
              </div>
              <div className="flex items-center">
                <div className="text-center mx-4">
                  <p>Direkt</p>
                  <div className="mt-1">✈️</div>
                </div>
                <div className="border-t border-gray-300 flex-1 mx-4"></div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">
                  {new Date(flight.ArrivalDateTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-lg font-semibold">{arrivalAirport}</p>
                <p className="text-sm text-gray-500">Varış Yeri</p>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-2 text-gray-600 flex justify-between items-center">
              <p>Uçuş Süresi: 1h</p>
              <p>Uçak tipi: Airbus A320 - Dar gövde</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-2xl font-semibold text-green-600">
                {flight.Price} TL
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Seç
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightResults;
