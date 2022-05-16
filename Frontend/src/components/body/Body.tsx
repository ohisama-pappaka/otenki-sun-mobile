import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useTailwind } from "tailwind-rn";
import axios from "axios";

const Body = () => {
  const tailwind = useTailwind();
  const [returnData, setReturnData] = useState<string>("Before");

  useEffect(() => {
    const url = "http://10.0.2.2:8000/";

    axios
      .get(url)
      .then((res) => {
        setReturnData(res.data);
      })
      .catch((error) => {
        setReturnData("Backend Error");
        console.error(error);
      });
  }, []);

  return (
    <>
      {/* CSS を使った文字の出力実験 */}
      <Text style={tailwind("text-pink-600 text-center")}>{returnData}</Text>

      <View style={tailwind("pt-3 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tailwind("text-blue-800 font-semibold")}>
            Hello Tailwind
          </Text>
        </View>
      </View>

      {/* CSS を使った文字の入力実験 */}
      <View>
        <Text style={tailwind("text-sm font-medium text-gray-700")}>Price</Text>
        <View style={tailwind("mt-1 relative rounded-md")}>
          <View
            style={tailwind(
              "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            )}
          >
            <Text
              style={tailwind(
                "pt-4 h-full text-center text-gray-500 sm:text-sm "
              )}
            >
              $
            </Text>
          </View>
          <TextInput
            style={tailwind(
              "border-2 border-rose-500 w-full pl-7 pr-12 sm:text-sm rounded-md"
            )}
            placeholder="0.00"
          />
        </View>
      </View>

      {/* カレンダーの導入実験  */}
      <Calendar />
    </>
  );
};
export default Body;
