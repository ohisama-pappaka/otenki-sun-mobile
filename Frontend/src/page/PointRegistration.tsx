import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  StyleSheet,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RNPickerSelect from "react-native-picker-select";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const PointRegistration = () => {
  const isDarkMode = useColorScheme() === "dark";

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
        <View style={styles.container}>
          <RNPickerSelect
            placeholder={{ label: "都道府県を選択してください", value: "" }}
            items={[
              { label: "北海道", value: "北海道" },
              { label: "青森", value: "青森" },
              { label: "岩手", value: "岩手" },
              { label: "宮城", value: "宮城" },
              { label: "秋田", value: "秋田" },
              { label: "山形", value: "山形" },
            ]}
            onValueChange={(value) => console.log(value)}
          />
          <RNPickerSelect
            placeholder={{ label: "市町村を選択してください", value: "" }}
            items={[
              { label: "札幌市", value: "札幌市" },
              { label: "函館市", value: "函館市" },
              { label: "小樽市", value: "小樽市" },
              { label: "旭川市", value: "旭川市" },
              { label: "室蘭市", value: "室蘭市" },
              { label: "釧路市", value: "釧路市" },
            ]}
            onValueChange={(value) => console.log(value)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PointRegistration;
