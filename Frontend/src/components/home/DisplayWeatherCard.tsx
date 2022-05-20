import React from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const DisplayWeatherCard = () => {
  const tailwind = useTailwind();
  const sunnyImagePath = "src/img/sunny.png";
  const highestTemperature = 30;
  const lowestTemperature = -40;

  return (
    <View style={tailwind("h-52 rounded-md p-4 m-4")}>
      <Text style={tailwind("text-center text-2xl")}>東京 / 晴れ</Text>
      <Image
        style={tailwind("w-24 h-24 self-center")}
        source={require(sunnyImagePath)}
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
