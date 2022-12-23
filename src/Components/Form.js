import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [cityName, setCityName] = useState("");
  const [weatherValue, setWeatherValue] = useState("");
  const [confirmCityName, setConfirmCityName] = useState("");

  const apiKey = "694421fc065357e82853d524221cd42b";

  const detail = (cityName) => {
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        setConfirmCityName(res.data.name);
        setWeatherValue(res.data.main.temp);
      })
      .catch((err) => console.log(err));
  };

  const changeHandler = (e) => {
    setCityName(e.target.value);
  };

  const clickHandler = () => {
    if (!cityName) {
      return "Enter city Name";
    }
    detail(cityName);
  };

  return (
    <div>
      <div className="mb-3" style={{ width: "30%", margin: "auto" }}>
        <label className="form-label">Enter City Name</label>
        <input
          type="email"
          name="name"
          value={cityName}
          onChange={changeHandler}
          className="form-control"
          placeholder="Enter City Name"
        />
        <button onClick={clickHandler}>Check Weather Name</button>
      </div>
      <div>
        {confirmCityName} {(weatherValue - 273.15).toFixed(2) + "*C"}
      </div>
    </div>
  );
};

export default Form;
