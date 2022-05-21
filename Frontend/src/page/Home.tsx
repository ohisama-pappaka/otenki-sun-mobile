import React from "react";
import { useColorScheme, View } from "react-native";
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
    <View style={tailwind("flex-1 items-center w-full")}>
      <Main />
      <View style={tailwind("w-full absolute bottom-0")}>
        <Footer />
      </View>
    </View>
  );
};

export default Home;
