import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import SelectPoint from "src/components/point-registration/SelectPoint";
import Confirmation from "src/components/point-registration/Confirmation";

const PointRegistration = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  // 都道府県と市町村の選択がされたときが、確認画面が出るトリガー
  useEffect(() => {
    if (selectedPrefecture !== "" && selectedCity !== "") {
      setModalVisible(true);
    }
  }, [selectedPrefecture, selectedCity]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <SelectPoint
          selectedPrefecture={selectedPrefecture}
          selectedCity={selectedCity}
          setSelectedPrefecture={setSelectedPrefecture}
          setSelectedCity={setSelectedCity}
        />

        <Confirmation
          selectedPrefecture={selectedPrefecture}
          setSelectedPrefecture={setSelectedPrefecture}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PointRegistration;
