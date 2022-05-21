import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Table, Row, Rows } from "react-native-table-component";

const DisplayHourlyWeather = () => {
  const tailwind = useTailwind();
  const tableHead = [
    "時間",
    "天気",
    "最高気温(℃)",
    "最低気温(℃)",
    "降水確率(%)",
  ];
  const tableData = [
    ["4時", "晴れ", "30", "-20", "30"],
    ["10時", "雷雨", "-20", "-23", "100"],
    ["16時", "雷雨", "-20", "-23", "100"],
    ["22時", "雷雨", "-20", "-23", "100"],
  ];
  return (
    <View style={tailwind("flex-1")}>
      <Table style={tailwind("border-0")}>
        <Row
          data={tableHead}
          // FIXME: style={tailwind{}} で text のスタイルを指定しても反映されなかった
          textStyle={{
            textAlign: "center",
          }}
        />
        <Rows
          data={tableData}
          style={tailwind("p-1")}
          // FIXME: style={tailwind{}} で text のスタイルを指定しても反映されなかった
          textStyle={{ textAlign: "center" }}
        />
      </Table>
    </View>
  );
};

export default DisplayHourlyWeather;
