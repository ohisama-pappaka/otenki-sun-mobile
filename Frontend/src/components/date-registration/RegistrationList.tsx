import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { storage } from "src/components/storage/Storage";

const RegistrationList = () => {
  const tailwind = useTailwind();
  const [dateData, setDateData] = useState<string[]>([]);

  storage
    .load({ key: "Date" })
    .then((data) => {
      setDateData(data);
    })
    .catch((err) => console.warn(err));
  return (
    <>
      <View>
        <Text style={tailwind("bg-gray-300 mx-1 px-2")}>登録日一覧</Text>
        <View>
          {dateData.map((date) => {
            return (
              <Text key={date} style={tailwind("my-2 px-2")}>
                {date}
              </Text>
            )
          })}
        </View>
      </View>
    </>
  );
};

export default RegistrationList;
