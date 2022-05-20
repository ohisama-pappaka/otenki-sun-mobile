import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Modal,
  Pressable,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RNPickerSelect from "react-native-picker-select";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

import SelectPoint from "src/components/point-registration/selectPoint";
import { dummyDataPrefecture } from "src/components/point-registration/DummyData";
import { dummyDataCity } from "src/components/point-registration/DummyData";

const PointRegistration = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const tailwind = useTailwind();
  const navigation = useNavigation();
  const [isSelectPrefecture, setIsSelectPrefecture] = useState<boolean>(false);
  const [isSelectCity, setIsSelectCity] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  // 都道府県と市町村の選択がされたときが、確認画面が出るトリガー
  useEffect(() => {
    if (isSelectPrefecture === true && isSelectCity === true) {
      setModalVisible(true);
    }
  }, [isSelectPrefecture, isSelectCity]);

  // キャンセル時の入力データのクリア
  const onRefresh = useCallback(() => {
    setModalVisible(false);
    setIsSelectCity(false);
    setIsSelectPrefecture(false);
    setSelectedPrefecture("");
    setSelectedCity("");
  }, []);

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
          setIsSelectPrefecture={setIsSelectPrefecture}
          setIsSelectCity={setIsSelectCity}
        />

        <View style={tailwind("flex-1 justify-center items-center mt-20")}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={tailwind("flex-1 justify-center items-center mt-20")}>
              <View
                style={tailwind(
                  "m-20 bg-white rounded-lg p-0 items-center px-4 py-10"
                )}
              >
                <Text style={tailwind("mb-4 text-center")}>
                  {selectedPrefecture}
                  {selectedCity}
                  を登録しますか？
                </Text>
                <View style={tailwind("flex flex-row")}>
                  <Pressable
                    style={tailwind(
                      "rounded-lg border-2 border-gray-500 p-2 m-2 bg-white"
                    )}
                    // XXX: 警告が出ていることは確認している
                    onPress={() => navigation.navigate("Home")}
                  >
                    <Text style={tailwind("font-bold text-center")}>
                      登録する
                    </Text>
                  </Pressable>
                  {/* TODO: キャンセルの際の挙動がうまく行ってない */}
                  <Pressable
                    style={tailwind(
                      "rounded-lg border-2 border-red-600 p-2 m-2 bg-red-600"
                    )}
                    onPress={() => {
                      onRefresh();
                    }}
                  >
                    <Text style={tailwind("text-white font-bold text-center")}>
                      キャンセル
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PointRegistration;
