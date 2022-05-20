import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

type Props = {
  keepDateList: string[];
};

const RegistrationList = ({ keepDateList }: Props) => {
  const tailwind = useTailwind();
  return (
    <>
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
    </>
  );
};

export default RegistrationList;
