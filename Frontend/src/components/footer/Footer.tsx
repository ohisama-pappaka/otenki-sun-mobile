import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Footer = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("h-14 bg-sky-500")}>
      <Text style={tailwind("p-4 text-slate-50 text-center")}>Footer</Text>
    </View>
  );
};

export default Footer;
