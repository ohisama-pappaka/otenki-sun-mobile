import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Body = () => {
  const tailwind = useTailwind();

  return (
    <>
      <View style={tailwind("h-40 bg-gray-100")} />
      <View style={tailwind("h-40 bg-gray-200")} />
      <View style={tailwind("h-40 bg-gray-300")} />
      <View style={tailwind("h-40 bg-gray-400")} />
    </>
  );
};
export default Body;
