import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import axios from "axios";

import DailyWeatherCard from "src/components/home/DailyWeather";
import HourlyWeather from "src/components/home/HourlyWeather";
import WeeklyWeather from "src/components/home/WeeklyWeather";
import ScheduledWeather from "src/components/home/ScheduledWeather";
import { useAppSelector } from "src/hooks/hooks";

const Body = () => {
  const tailwind = useTailwind();
  const [dAndHWeatherData, setDAndHWeatherData] = useState<string[]>([]);
  const selectedPrefectureName = useAppSelector(
    (state) => state.prefectureName
  );
  const selectedCityName = useAppSelector((state) => state.cityName);

  // Daily & Hourly の天気データの取得
  useEffect(() => {
    const url =
      "http://10.0.2.2:8000/daily/" +
      selectedPrefectureName +
      "/" +
      selectedCityName;
    axios
      .get(url)
      .then((res) => {
        setDAndHWeatherData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedPrefectureName, selectedCityName]);

  return (
    <ScrollView style={tailwind("w-96")}>
      <DailyWeatherCard
        selectedPrefectureName={selectedPrefectureName}
        selectedCityName={selectedCityName}
        weatherData={dAndHWeatherData}
      />
      <HourlyWeather weatherDataList={dAndHWeatherData} />
      <WeeklyWeather />
      <ScheduledWeather />
    </ScrollView>
  );
};
export default Body;
