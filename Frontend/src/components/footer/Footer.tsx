import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Footer = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  return (
    <View style={tailwind("h-full bg-sky-500")}>
      <Text
        style={tailwind("p-5 text-slate-50 text-center")}
        // XXX: 警告が出ていることは確認している
        onPress={() => navigation.navigate("SettingTime")}
      >
        Footer
      </Text>
    </View>
  );
};

export default Footer;
