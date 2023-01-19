import React, { useState, useEffect } from 'react';
import './weather.css';

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Dharan');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cbaf7470aa5e936d80f553bad7839eea`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? ( 
          <p>No data Found</p>
        ) : (
          <div>
            <div className="info">
            <h2>Today's Weather</h2>
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}° Celsius</h1>
              <h3 className="tempin_max">
                min: {city.temp_min}° Cel | max: {city.temp_max}° Cel
              </h3>
              <h3 className="humidity">Humidity: {city.humidity}g m³</h3>

              <div className="wave1"></div>
              <div className="wave2"></div>
              <div className="wave3"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
