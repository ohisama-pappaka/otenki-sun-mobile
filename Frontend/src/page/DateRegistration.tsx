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

const yearList = [
  { label: "2022", value: "2022" },
  { label: "2023", value: "2023" },
  { label: "2024", value: "2024" },
];

const monthList = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
];

const dayList = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
  { label: "19", value: "19" },
  { label: "20", value: "20" },
  { label: "21", value: "21" },
  { label: "22", value: "22" },
  { label: "23", value: "23" },
  { label: "24", value: "24" },
];

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
        <View style={tailwind("flex-1 items-center justify-center")}>
          <RNPickerSelect
            placeholder={{ label: "年", value: "" }}
            items={yearList}
            onValueChange={(value) => {
              setInputYear(value);
            }}
            value={inputYear}
          />
          <RNPickerSelect
            placeholder={{ label: "月", value: "" }}
            items={monthList}
            onValueChange={(value) => {
              setInputMonth(value);
            }}
            value={inputMonth}
          />
          <RNPickerSelect
            placeholder={{ label: "日", value: "" }}
            items={dayList}
            onValueChange={(value) => {
              setInputDay(value);
            }}
            value={inputDay}
          />
        </View>

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
