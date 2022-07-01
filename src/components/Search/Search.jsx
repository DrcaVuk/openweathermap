import { useState, useContext } from "react";
import { WeatherContext } from "../../shared/context/weather-context";
import { AiOutlineSearch } from "react-icons/ai";

import "./Search.css";

const Search = () => {
  const [countryCode, setCountryCode] = useState("");
  const [city, setCity] = useState("");
  const weatherData = useContext(WeatherContext);
  return (
    <div className="search">
      <form>
        <div className="form-control">
          <select
            value={countryCode}
            onChange={(e) => {
              setCountryCode(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="gb">GB</option>
            <option value="rs">RS</option>
            <option value="us">US</option>
          </select>
        </div>
        <div className="form-control">
          <div className="search_input">
            <input
              type="text"
              name="search_city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") weatherData.fetchData(city, countryCode);
              }}
              placeholder="Enter city name"
            />
            <AiOutlineSearch
              onClick={() => {
                weatherData.fetchData(city, countryCode);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
