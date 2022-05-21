import React from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";

const ScheduledWeather = () => {
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
    ["1/10", "https://bit.ly/3wJSkrf", "30", "-20", "30"],
    ["1/11", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
    ["1/12", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
    ["1/13", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
    ["1/14", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
    ["1/15", "https://bit.ly/3wJSkrf", "-20", "-23", "100"],
  ];

  return (
    <>
      <Text style={tailwind("pt-4 pl-2 text-lg text-sky-500")}>
        予定日の天気
      </Text>
      {tableData[0][0] !== undefined ? (
        <View>
          <Table style={tailwind("border-0 pr-3 pb-24")}>
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
      ) : (
        <Text style={tailwind("pb-8")}>予定は登録されていません</Text>
      )}
    </>
  );
};

export default ScheduledWeather;
