import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Body = () => {
  const tailwind = useTailwind();

  return (
    <>
      {/* CSS を使った文字の出力実験 */}
      <View style={tailwind("mt-5 h-40 bg-gray-50")} />
      <View style={tailwind("mt-5 h-40 bg-gray-100")} />
      <View style={tailwind("mt-5 h-40 bg-gray-200")} />
      <View style={tailwind("mt-5 h-40 bg-gray-300")} />
      <View style={tailwind("mt-5 h-40 bg-gray-400")} />
      <View style={tailwind("mt-5 h-40 bg-gray-500")} />
      <View style={tailwind("mt-5 h-40 bg-gray-600")} />
      <View style={tailwind("mt-5 h-40 bg-gray-700")} />
      <View style={tailwind("mt-5 h-40 bg-gray-800")} />
      <View style={tailwind("mt-5 h-40 bg-gray-900")} />
    </>
  );
};
export default Body;
