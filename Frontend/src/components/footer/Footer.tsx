import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Footer = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  return (
    <View style={tailwind("bg-sky-500 w-full")}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={tailwind("p-5 text-slate-50 text-center")}
            // XXX: 警告が出ていることは確認している
            onPress={() => navigation.navigate("PointRegistration")}
          >
            地点登録
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={tailwind("p-5 text-slate-50 text-center")}
            // XXX: 警告が出ていることは確認している
            onPress={() => navigation.navigate("DateRegistration")}
          >
            予定日登録
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={tailwind("p-5 text-slate-50 text-center")}
            // XXX: 警告が出ていることは確認している
            onPress={() => navigation.navigate("Others")}
          >
            その他
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
