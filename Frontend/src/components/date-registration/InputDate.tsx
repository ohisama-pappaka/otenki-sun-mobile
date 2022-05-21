import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTailwind } from "tailwind-rn";

import { yearList } from "src/components/date-registration/CalendarData";
import { monthList } from "src/components/date-registration/CalendarData";
import { dayList } from "src/components/date-registration/CalendarData";

type Props = {
  inputYear: string;
  setInputYear: Dispatch<SetStateAction<string>>;
  inputMonth: string;
  setInputMonth: Dispatch<SetStateAction<string>>;
  inputDay: string;
  setInputDay: Dispatch<SetStateAction<string>>;
};

const InputDate = ({
  inputYear,
  setInputYear,
  inputMonth,
  setInputMonth,
  inputDay,
  setInputDay,
}: Props) => {
  const tailwind = useTailwind();
  return (
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
  );
};

export default InputDate;
