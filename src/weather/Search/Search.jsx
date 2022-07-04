import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../../shared/context/weather-context";
import { useFormik, Field } from "formik";
import * as Yup from "yup";

import { AiOutlineSearch } from "react-icons/ai";
import gbFlag from "../../assets/flags/gb.svg";
import rsFlag from "../../assets/flags/rs.svg";
import usFlag from "../../assets/flags/us.svg";

import "./Search.css";

const Search = () => {
  // const [countryCode, setCountryCode] = useState("");
  // const [city, setCity] = useState("");
  const [flag, setFlag] = useState(null);
  const weatherData = useContext(WeatherContext);

  const formik = useFormik({
    initialValues: {
      city: "",
      countryCode: "",
    },
    validationSchema: Yup.object({
      city: Yup.string().min(1).required("Plase enter city name"),
      countryCode: Yup.string().min(2).required("Plase select county code!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      weatherData.fetchData(values.city, values.countryCode);
    },
  });

  // const handlerData = () => {
  //   weatherData.fetchData(city, countryCode);
  // };

  useEffect(() => {
    console.log(formik.values);
    switch (formik.values.countryCode) {
      case "gb":
        setFlag(gbFlag);
        break;
      case "rs":
        setFlag(rsFlag);
        break;
      case "us":
        setFlag(usFlag);
        break;
      default:
        setFlag(null);
        break;
    }
  }, [formik.values.countryCode]);

  return (
    <div className="search">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control_select">
          <div className="form-control_flag">
            {flag && <img src={flag} alt="GB" />}
          </div>
          <select
            name="countryCode"
            onChange={formik.handleChange}
            onBlur={formik.onBlur}
          >
            <option value=""></option>
            <option value="gb" label="gb">
              GB
            </option>
            <option value="rs" label="rs">
              RS
            </option>
            <option value="us" label="us">
              US
            </option>
          </select>
        </div>
        <div className="form-control_input">
          <input
            type="text"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Plase enter your location"
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
      <div className="error-message">
        {formik.errors.countryCode && formik.touched.countryCode && (
          <p>{formik.errors.countryCode}</p>
        )}
        {formik.errors.city && formik.touched.city && (
          <p>{formik.errors.city}</p>
        )}
      </div>
    </div>
  );
};

export default Search;
