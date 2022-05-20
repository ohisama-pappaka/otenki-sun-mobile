import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTailwind } from "tailwind-rn";

import { dummyDataPrefecture } from "src/components/point-registration/DummyData";
import { dummyDataCity } from "src/components/point-registration/DummyData";

type Props = {
  selectedPrefecture: string;
  selectedCity: string;
  setSelectedPrefecture: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<string>>;
};

const SelectPoint = ({
  selectedPrefecture,
  selectedCity,
  setSelectedPrefecture,
  setSelectedCity,
}: Props) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex-1 items-center justify-center")}>
      <RNPickerSelect
        placeholder={{ label: "都道府県を選択してください", value: "" }}
        items={dummyDataPrefecture}
        onValueChange={(value) => {
          setSelectedPrefecture(value);
        }}
        value={selectedPrefecture}
      />
      <RNPickerSelect
        placeholder={{ label: "市町村を選択してください", value: "" }}
        items={dummyDataCity}
        onValueChange={(value) => {
          setSelectedCity(value);
        }}
        value={selectedCity}
      />
    </View>
  );
};

export default SelectPoint;
