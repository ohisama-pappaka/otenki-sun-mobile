import React, { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import RNPickerSelect, { Item } from "react-native-picker-select";
import { useTailwind } from "tailwind-rn";

import { dataPrefecture } from "src/components/point-registration/DataPrefectureList";
import axios from "axios";

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

  const [cityNameList, setCityNameList] = useState<Item[]>([]);

  const handleClick = (prefectureName: string) => {
    axios
      .get("http://10.0.2.2:8000/city/" + prefectureName)
      .then((res) => {
        setCityNameList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={tailwind("flex-1 items-center justify-center")}>
      <RNPickerSelect
        placeholder={{ label: "都道府県を選択してください", value: "" }}
        items={dataPrefecture}
        onValueChange={(value) => {
          setSelectedPrefecture(value);
          handleClick(value);
        }}
        onDonePress={() => {}}
        value={selectedPrefecture}
      />
      {cityNameList.length === 0 ? (
        <RNPickerSelect
          placeholder={{ label: "先に都道府県を選択してください", value: "" }}
          items={cityNameList}
          onValueChange={(value) => {
            setSelectedCity(value);
          }}
          value={selectedCity}
        />
      ) : (
        <RNPickerSelect
          placeholder={{ label: "市町村を選択してください", value: "" }}
          items={cityNameList}
          onValueChange={(value) => {
            setSelectedCity(value);
          }}
          value={selectedCity}
        />
      )}
    </View>
  );
};

export default SelectPoint;
