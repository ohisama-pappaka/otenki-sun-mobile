import React, { useState } from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RNPickerSelect from "react-native-picker-select";
import { useTailwind } from "tailwind-rn";

import InputDate from "src/components/date-registration/InputDate";
import { yearList } from "src/components/date-registration/CalendarData";
import { monthList } from "src/components/date-registration/CalendarData";
import { dayList } from "src/components/date-registration/CalendarData";

const DateRegistration = () => {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const tailwind = useTailwind();

  const [inputYear, setInputYear] = useState<string>("");
  const [inputMonth, setInputMonth] = useState<string>("");
  const [inputDay, setInputDay] = useState<string>("");
  const [isOverlappingVali, setIsOverlappingVali] = useState<boolean>(false);
  const [isInputNull, setIsInputNull] = useState<boolean>(false);
  const [overlappingData, setOverlappingData] = useState<string>("");

  const [keepDateList, setKeepDateList] = useState<string[]>([]);

  const RegistrationDate = () => {
    const addData = inputYear + "年" + inputMonth + "月" + inputDay + "日";
    const newDataList = [...keepDateList];

    if (inputYear === "" || inputMonth === "" || inputDay === "") {
      console.log("データに欠損あり！");
      setIsInputNull(true);
    } else if (newDataList.includes(addData) === true) {
      console.log("重複あり！");
      setOverlappingData(addData);
      setIsOverlappingVali(true);
    } else {
      newDataList.push(addData);
      setKeepDateList(newDataList);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <InputDate
          inputYear={inputYear}
          setInputYear={setInputYear}
          inputMonth={inputMonth}
          setInputMonth={setInputMonth}
          inputDay={inputDay}
          setInputDay={setInputDay}
        />

        <View
          style={tailwind(
            "rounded-lg border-2 border-sky-500 p-2 m-16 bg-sky-500"
          )}
        >
          <TouchableHighlight onPress={RegistrationDate}>
            <Text style={tailwind("text-white font-bold text-center")}>
              登録する
            </Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text style={tailwind("bg-gray-300 mx-1 px-2")}>登録日一覧</Text>
          <View>
            {keepDateList &&
              keepDateList.map((eachData) => {
                return (
                  <Text key={eachData} style={tailwind("my-2 px-2")}>
                    {eachData}
                  </Text>
                );
              })}
          </View>
        </View>

        {/* 重複がある場合の警告 */}
        <View style={tailwind("flex-1 justify-center items-center mt-20")}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isOverlappingVali}
          >
            <View style={tailwind("flex-1 justify-center items-center mt-20")}>
              <View
                style={tailwind(
                  "m-20 bg-white rounded-lg p-0 items-center px-4 py-10"
                )}
              >
                <Text style={tailwind("mb-4 text-center")}>
                  {overlappingData}
                  は既に登録されています
                </Text>

                <Pressable
                  style={tailwind(
                    "rounded-lg border-2 border-red-600 p-2 m-2 bg-red-600"
                  )}
                  onPress={() => {
                    setIsOverlappingVali(false);
                    setInputYear("");
                    setInputMonth("");
                    setInputDay("");
                  }}
                >
                  <Text style={tailwind("text-white font-bold text-center")}>
                    キャンセル
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        {/* データの欠損がある場合の警告 */}
        <View style={tailwind("flex-1 justify-center items-center mt-20")}>
          <Modal animationType="slide" transparent={true} visible={isInputNull}>
            <View style={tailwind("flex-1 justify-center items-center mt-20")}>
              <View
                style={tailwind(
                  "m-20 bg-white rounded-lg p-0 items-center px-4 py-10"
                )}
              >
                <Text style={tailwind("mb-4 text-center")}>
                  データの入力に誤りがあります！
                </Text>

                <Pressable
                  style={tailwind(
                    "rounded-lg border-2 border-red-600 p-2 m-2 bg-red-600"
                  )}
                  onPress={() => {
                    setIsInputNull(false);
                    setInputYear("");
                    setInputMonth("");
                    setInputDay("");
                  }}
                >
                  <Text style={tailwind("text-white font-bold text-center")}>
                    キャンセル
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DateRegistration;
