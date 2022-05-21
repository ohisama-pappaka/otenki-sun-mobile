import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
  Button,
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
        <View style={tailwind("p-5 text-current text-center")}>
          <Button title="Q&A" />
        </View>
        <View style={tailwind("p-5 text-current text-center")}>
          <Button
            title="地点の追加/変更/削除"
            onPress={() => navigation.navigate("PointRegistration")}
          />
        </View>
        <View style={tailwind("p-5 text-current text-center")}>
          <Button
            title="予定日の追加/変更/削除"
            onPress={() => navigation.navigate("DateRegistration")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Others;
