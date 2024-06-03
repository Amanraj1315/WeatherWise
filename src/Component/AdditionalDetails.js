import React from "react";

const AdditionalDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className="AdditionalDetails">
      <div>
        <h3>Humidity</h3>
        <p>{data.humidity}%</p>
      </div>
      <div>
        <h3>Wind Speed</h3>
        <p>{data.windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default AdditionalDetails;
