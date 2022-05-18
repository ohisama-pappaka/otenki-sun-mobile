import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
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
        <View style={{ height: 789 }}>
          <View style={{ flex: 1 }}>
            <Header />
          </View>
          {/* FIXME: 現状 Body の要素が増えると途中で見切れてしまう */}
          <View style={{ flex: 10 }}>
            <Body />
          </View>
          <View style={{ flex: 1 }}>
            <Footer />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
