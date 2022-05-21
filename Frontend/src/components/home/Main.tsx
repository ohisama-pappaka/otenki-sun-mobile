import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { DataTable } from "react-native-paper";

import DailyWeatherCard from "src/components/home/DailyWeather";
import HourlyWeather from "src/components/home/HourlyWeather";
import WeeklyWeather from "src/components/home/WeeklyWeather";
import ScheduledWeather from "src/components/home/ScheduledWeather";

const Body = () => {
  return (
    <ScrollView>
      <DailyWeatherCard />
      <HourlyWeather />
      <WeeklyWeather />
      <ScheduledWeather />
    </ScrollView>
  );
};
export default Body;
