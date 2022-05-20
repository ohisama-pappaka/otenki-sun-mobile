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
import Validation from "src/components/date-registration/Validation";
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
      setIsInputNull(true);
    } else if (newDataList.includes(addData) === true) {
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

        <Validation
          isOverlappingVali={isOverlappingVali}
          setIsOverlappingVali={setIsOverlappingVali}
          overlappingData={overlappingData}
          isInputNull={isInputNull}
          setIsInputNull={setIsInputNull}
          setInputYear={setInputYear}
          setInputMonth={setInputMonth}
          setInputDay={setInputDay}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DateRegistration;
