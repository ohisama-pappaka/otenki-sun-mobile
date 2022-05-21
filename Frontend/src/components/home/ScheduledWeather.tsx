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
  const scheduledWeatherDataList: string[] = [];

  return (
    <>
      <Text style={tailwind("pt-4 pl-2 text-lg text-sky-500")}>
        予定日の天気
      </Text>
      {scheduledWeatherDataList.length !== 0 ? (
        <View>
          <Table style={tailwind("border-0 pr-3 pb-24")}>
            <Row
              data={tableHead}
              // FIXME: style={tailwind{}} で text のスタイルを指定しても反映されなかった
              textStyle={{
                textAlign: "center",
              }}
            />
            {scheduledWeatherDataList.map((rowData, index) => (
              <TableWrapper key={index} style={tailwind("flex-row")}>
                {/* XXX: 警告が出ていることは確認している */}
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
        <Text style={tailwind("pl-2 pb-24")}>予定は登録されていません</Text>
      )}
    </>
  );
};

export default ScheduledWeather;
