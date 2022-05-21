import React from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";

const DisplayWeeklyWeather = () => {
  const tailwind = useTailwind();

  // ダミーデータ 後に削除
  const tableHead = [
    "日付",
    "天気",
    "最高気温(℃)",
    "最低気温(℃)",
    "降水確率(%)",
  ];
  const tableData = [
    ["1/1", "https://bit.ly/3wJSkrf", "30", "-20", "30"],
    ["1/2", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
    ["1/3", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
    ["1/4", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
  ];

  return (
    <>
      <Text>週間天気</Text>
      <View style={tailwind("flex-1 p-0")}>
        <Table style={tailwind("border-0 m-2 bg-gray-300")}>
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
    </>
  );
};
export default DisplayWeeklyWeather;
