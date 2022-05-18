import React from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const Body = () => {
  const tailwind = useTailwind();

  return (
    <>
      {/* CSS を使った文字の出力実験 */}
      <Text style={tailwind("text-pink-600 text-center")}>Body</Text>
    </>
  );
};
export default Body;
