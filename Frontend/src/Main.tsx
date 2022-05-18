import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import Header from "src/components/header/Header";
import Body from "src/components/body/Body";
import Footer from "src/components/footer/Footer";

const Main = () => {
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
        <Header />
        <Body />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
