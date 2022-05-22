import React from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

type Props = {
  selectedPrefectureName: string;
  selectedCityName: string;
  weatherData: string[];
};

const DisplayWeatherCard = ({
  selectedPrefectureName,
  selectedCityName,
  weatherData,
}: Props) => {
  const tailwind = useTailwind();

  let weatherImage = "";
  let highestTemperature = "";
  let rainyPercent = "";

  if (weatherData.length !== 0) {
    weatherImage = weatherData[0]["2"];
    highestTemperature = weatherData[0]["3"];
    rainyPercent = weatherData[0]["5"];
  }

  return (
    <View style={tailwind("h-52 rounded-md p-4 m-4")}>
      <Text style={tailwind("text-center text-2xl")}>
        {selectedPrefectureName}
        {selectedCityName}市
      </Text>
      <Image
        style={tailwind("w-24 h-24 self-center")}
        source={{
          uri: weatherImage,
        }}
      />
      <Text style={tailwind("text-center text-amber-500 text-lg")}>
        気温 {highestTemperature}℃
      </Text>
      <Text style={tailwind("text-center text-lg")}>
        降水確率 {rainyPercent}
      </Text>
    </View>
  );
};

export default DisplayWeatherCard;
