import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import axios from "axios";
import { useTailwind } from "tailwind-rn";
import { Input } from "postcss";

const Body = () => {
  const tailwind = useTailwind();
  const [returnData, setReturnData] = useState<string>("");

  useEffect(() => {
    const url = "http://10.0.2.2:8000/";

    axios
      .get(url)
      .then((res) => {
        setReturnData(res.data);
      })
      .catch((error) => {
        console.error(error);
        setReturnData("Backend Error");
      });
  }, []);

  return (
    <>
      <Text style={tailwind("text-blue-800 text-center")}>Hello Tailwind</Text>
      <View>
        <TextInput style={tailwind("")} placeholder="useleasdass placeholder" />
      </View>
    </>
  );
};
export default Body;
