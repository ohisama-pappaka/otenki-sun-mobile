import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { DataTable } from "react-native-paper";

import DisplayWeatherCard from "src/components/home/DisplayWeatherCard";

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});

const Body = () => {
  const tailwind = useTailwind();
  const sunnyImagePath = "src/img/sunny.png";
  const highestTemperature = 30;
  const lowestTemperature = -40;

  return (
    <ScrollView>
      <View style={tailwind("h-40 bg-gray-200")}>
        <Text> Main Content Here</Text>
      </View>
      <View style={tailwind("h-40 bg-gray-300")}>
        <Text> Main Content Here</Text>
      </View>
      <View style={tailwind("h-40 bg-gray-400")}>
        <Text> Main Content Here</Text>
      </View>
      <View style={tailwind("h-40 bg-gray-500")}>
        <Text> Main Content Here</Text>
      </View>
      <View style={tailwind("h-40 bg-gray-600")}>
        <Text> Main Content Here</Text>
      </View>
      <View style={tailwind("h-40 bg-gray-500")}>
        <Text> Main Content Here</Text>
      </View>
      <View style={tailwind("h-40 bg-gray-400")}>
        <Text> Main Content Here</Text>
      </View>
      <View style={tailwind("h-40 bg-gray-300")}>
        <Text> Main Content Here</Text>
      </View>
      <View style={tailwind("h-40 bg-gray-200")}>
        <Text> Main Content Here</Text>
      </View>
    </ScrollView>
  );
};
export default Body;
