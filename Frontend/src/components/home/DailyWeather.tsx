import React, { useDebugValue, useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

type Props = {
  selectedCity: string;
  weatherData: string[];
};

const DisplayWeatherCard = ({ selectedCity, weatherData }: Props) => {
  const tailwind = useTailwind();

  const weatherImage = weatherData[0]["2"];
  const highestTemperature = weatherData[0]["3"];
  const lowestTemperature = weatherData[0]["1"];
  const rainyPercent = weatherData[0]["5"];

  return (
    <View style={tailwind("h-52 rounded-md p-4 m-4")}>
      <Text style={tailwind("text-center text-2xl")}>{selectedCity}</Text>
      <Image
        style={tailwind("w-24 h-24 self-center")}
        source={{
          uri: weatherImage,
        }}
      />
      <Text style={tailwind("text-center text-amber-500")}>
        最高気温 {highestTemperature}℃
      </Text>
      <Text style={tailwind("text-center text-blue-600")}>
        最低気温 {lowestTemperature}℃
      </Text>
      <Text style={tailwind("text-center")}>降水確率 {rainyPercent}</Text>
    </View>
  );
};

export default DisplayWeatherCard;
