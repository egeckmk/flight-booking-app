import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";

const FlightSearch = ({ onSearch }) => {
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [airports, setAirports] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [arrivalSearchQuery, setArrivalSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAirports = async (query, setAirportOptions) => {
    try {
      if (!query) return;
      const response = await fetch(
        `https://api.api-ninjas.com/v1/airports?name=${query}&limit=5`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "e6DUv6+6oAu/EdDdAgedWw==N8ippw3pm3q9Uw2H",
          },
        }
      );
      const data = await response.json();
      const filteredAirports = data.filter((airport) => airport.iata);

      setAirportOptions(
        filteredAirports.map((airport) => ({
          label: `${airport.name} (${airport.iata}) - ${airport.city}`,
          value: airport.iata,
        }))
      );
    } catch (error) {
      console.error("Havalimanlarını çekerken bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchAirports(searchQuery, setAirports);
    } else {
      setAirports([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (arrivalSearchQuery.length > 0) {
      fetchAirports(arrivalSearchQuery, setAirports);
    } else {
      setAirports([]);
    }
  }, [arrivalSearchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!departureAirport || !arrivalAirport || !departureDate) {
      setErrorMessage(
        "Lütfen kalkış, varış ve tarih bilgilerini eksiksiz doldurunuz."
      );
      return;
    }

    setErrorMessage("");
    onSearch({
      departureAirport,
      arrivalAirport,
      departureDate,
    });
  };

  const trLocale = {
    firstDayOfWeek: 1,
    showMonthAfterYear: true,
    dayNames: [
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
    ],
    dayNamesShort: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
    dayNamesMin: ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"],
    monthNames: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    monthNamesShort: [
      "Oca",
      "Şub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "Ağu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara",
    ],
    today: "Bugün",
    clear: "Temizle",
    chooseDate: "Tarih Seç",
    weekHeader: "Hafta",
  };

  addLocale("tr", trLocale);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Kalkış Havalimanı
        </label>
        <Dropdown
          value={departureAirport}
          options={airports}
          onChange={(e) => setDepartureAirport(e.value)}
          onInput={(e) => setSearchQuery(e.target.value)}
          placeholder="Havalimanı seçin veya yazın"
          editable
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Varış Havalimanı
        </label>
        <Dropdown
          value={arrivalAirport}
          options={airports}
          onChange={(e) => setArrivalAirport(e.value)}
          onInput={(e) => setArrivalSearchQuery(e.target.value)}
          placeholder="Bir havalimanı seçin veya yazın"
          editable
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Gidiş Tarihi:
        </label>
        <Calendar
          value={departureDate}
          onChange={(e) => setDepartureDate(e.value)}
          dateFormat="dd/mm/yy"
          locale="tr"
          showIcon
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Uçuş Ara
      </button>
    </form>
  );
};

export default FlightSearch;
