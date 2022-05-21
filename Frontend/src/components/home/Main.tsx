import React from "react";

import DisplayWeatherCard from "src/components/home/DisplayWeatherCard";
import DisplayHourlyWeather from "src/components/home/DisplayHourlyWeather";

const Body = () => {
  return (
    <>
      <DisplayWeatherCard />
      <DisplayHourlyWeather />
    </>
  );
};
export default Body;
