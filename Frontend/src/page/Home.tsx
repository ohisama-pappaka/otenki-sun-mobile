import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import Main from "src/components/home/Main";
import Footer from "src/components/footer/Footer";
import { useTailwind } from "tailwind-rn";

const Home = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const tailwind = useTailwind();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View>
          {/* FIXME: 現状 Body の要素が増えると途中で見切れてしまう */}
          <View>
            <Main />
          </View>
          <View>
            <Footer />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
