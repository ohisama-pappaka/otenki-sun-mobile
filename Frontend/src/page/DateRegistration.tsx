import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useTailwind } from "tailwind-rn";

import InputDate from "src/components/date-registration/InputDate";
import Validation from "src/components/date-registration/Validation";
import RegistrationList from "src/components/date-registration/RegistrationList";
import { storage } from "src/components/storage/Storage";

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
  const [dateData, setDateData] = useState<string[]>([]);
  const RegistrationDate = () => {
    const addData = inputYear + "年" + inputMonth + "月" + inputDay + "日";
    storage
      .load({ key: "Date" })
      .then((data) => {
        setDateData(data);
      });

    if (inputYear === "" || inputMonth === "" || inputDay === "") {
      setIsInputNull(true);
    } else if (dateData.includes(addData) === true) {
      setOverlappingData(addData);
      setIsOverlappingVali(true);
    } else {
      dateData.push(addData);
      storage.save({ key: "Date", data: dateData });
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

        <RegistrationList />

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
