import { AiOutlineSearch } from "react-icons/ai";

import "./Search.css";

const Search = (props) => {
  return (
    <div className="search">
      <form>
        <div className="form-control">
          <select
            value={props.countryCode}
            onChange={(e) => {
              props.setCountryCode(e.target.value);
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
              value={props.city}
              onChange={(e) => {
                props.setCity(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") props.fetchData();
              }}
              placeholder="Enter city name"
            />
            <AiOutlineSearch
              onClick={() => {
                props.fetchData();
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
