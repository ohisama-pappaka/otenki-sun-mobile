import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import axios from "axios";

import DailyWeatherCard from "src/components/home/DailyWeather";
import HourlyWeather from "src/components/home/HourlyWeather";
import WeeklyWeather from "src/components/home/WeeklyWeather";
import ScheduledWeather from "src/components/home/ScheduledWeather";
import { useTailwind } from "tailwind-rn";

const Body = () => {
  const tailwind = useTailwind();
  const [dAndHWeatherData, setDAndHWeatherData] = useState<string[]>([]);
  const selectedCity = "宇部";

  // Daily & Hourly の天気データの取得
  useEffect(() => {
    const url = "http://10.0.2.2:8000/daily";
    axios
      .get(url)
      .then((res) => {
        setDAndHWeatherData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCity]);

  return (
    <ScrollView style={tailwind("w-96")}>
      <DailyWeatherCard
        selectedCity={selectedCity}
        weatherData={dAndHWeatherData}
      />
      <HourlyWeather weatherData={dAndHWeatherData} />
      <WeeklyWeather />
      <ScheduledWeather />
    </ScrollView>
  );
};
export default Body;
