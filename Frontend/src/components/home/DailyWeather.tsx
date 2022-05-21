import React from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAppSelector } from "src/hooks/hooks";

const DisplayWeatherCard = () => {
  const tailwind = useTailwind();
  const sunnyImagePath = "https://bit.ly/3wJSkrf";
  const highestTemperature = 30;
  const lowestTemperature = -40;

  const cityName = useAppSelector((state) => state.cityName);

  return (
    <View style={tailwind("h-52 rounded-md p-4 m-4")}>
      <Text style={tailwind("text-center text-2xl")}>{cityName} / 晴れ</Text>
      <Image
        style={tailwind("w-24 h-24 self-center")}
        source={{
          uri: sunnyImagePath,
        }}
      />
      <Text style={tailwind("text-center text-amber-500")}>
        最高気温 {highestTemperature}℃
      </Text>
      <Text style={tailwind("text-center text-blue-600")}>
        最低気温 {lowestTemperature}℃
      </Text>
      <Text style={tailwind("text-center")}>
        降水確率(午前) / 降水確率(午後)
      </Text>
    </View>
  );
};

export default DisplayWeatherCard;
