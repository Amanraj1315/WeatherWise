import React from "react";

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <div className="CurrentWeather">
      <h2>Current Weather</h2>
      <img
        src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
      />
      <p>{data.temp}°C</p>
      <p>{data.description}</p>
    </div>
  );
};

export default CurrentWeather;
