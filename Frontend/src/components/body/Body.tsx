import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import axios from "axios";
import { useTailwind } from "tailwind-rn";

const Body = () => {
  const tailwind = useTailwind();
  const [returnData, setReturnData] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

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
      <Text style={tailwind("text-pink-600 text-center")}>{returnData}</Text>

      <View style={tailwind("pt-3 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tailwind("text-blue-800 font-semibold")}>
            Hello Tailwind
          </Text>
        </View>
      </View>

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
          {/* <View className="absolute inset-y-0 right-0 flex items-center">
            <Text htmlFor="currency" className="sr-only">
              Currency
            </Text>
            <select
              id="currency"
              name="currency"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </View> */}
        </View>
      </View>
    </>
  );
};
export default Body;
