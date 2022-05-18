import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useTailwind } from "tailwind-rn";
import axios from "axios";

const Body = () => {
  const tailwind = useTailwind();
  const [returnData, setReturnData] = useState<string>("Before");

  return (
    <>
      {/* CSS を使った文字の出力実験 */}
      <Text style={tailwind("text-pink-600 text-center")}>{returnData}</Text>
    </>
  );
};
export default Body;
