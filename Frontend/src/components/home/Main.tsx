import React from "react";

import DailyWeatherCard from "src/components/home/DailyWeather";
import HourlyWeather from "src/components/home/HourlyWeather";
import WeeklyWeather from "src/components/home/WeeklyWeather";
import ScheduledWeather from "src/components/home/ScheduledWeather";

const Body = () => {
  return (
    <>
      <DailyWeatherCard />
      <HourlyWeather />
      <WeeklyWeather />
      <ScheduledWeather />
    </>
  );
};
export default Body;
