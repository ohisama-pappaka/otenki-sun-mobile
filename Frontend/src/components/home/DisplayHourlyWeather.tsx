import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell,
} from "react-native-table-component";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" },
});

const DisplayHourlyWeather = () => {
  const tailwind = useTailwind();

  // ダミーデータ 後に削除
  const tableHead = [
    "時間",
    "天気",
    "最高気温(℃)",
    "最低気温(℃)",
    "降水確率(%)",
  ];
  const tableData = [
    ["4時", "https://bit.ly/3wJSkrf", "30", "-20", "30"],
    ["10時", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
    ["16時", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
    ["22時", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
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

        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={tailwind("flex-row")}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={
                  cellIndex === 1 && cellData ? (
                    <Image
                      style={tailwind("w-6 h-6 self-center")}
                      source={{
                        uri: cellData,
                      }}
                    />
                  ) : (
                    cellData
                  )
                }
                textStyle={{ textAlign: "center" }}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
};

export default DisplayHourlyWeather;
