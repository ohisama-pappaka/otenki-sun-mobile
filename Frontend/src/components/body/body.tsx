import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import axios from "axios";

const Body = () => {
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
      });
  }, []);

  return <Text>{returnData}</Text>;
};
export default Body;
