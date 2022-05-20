import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTailwind } from "tailwind-rn";

const Others = () => {
  const isDarkMode = useColorScheme() === "dark";
  const tailwind = useTailwind();
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Text>Q&A</Text>
        <Text
          style={tailwind("p-5 text-currunt text-center")}
          // XXX: 警告が出ていることは確認している
          onPress={() => navigation.navigate("PointRegistration")}
        >
          地点の追加/変更/削除
        </Text>
        <Text
          style={tailwind("p-5 text-currunt text-center")}
          // XXX: 警告が出ていることは確認している
          onPress={() => navigation.navigate("DateRegistration")}
        >
          予定日の追加/変更/削除
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Others;
