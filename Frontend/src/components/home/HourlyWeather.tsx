import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Row, TableWrapper, Cell, Table } from "react-native-table-component";

type Props = {
  weatherDataList: string[];
};

const DisplayHourlyWeather = ({ weatherDataList }: Props) => {
  const tailwind = useTailwind();

  const tableHead = ["時間", "天気", "気温(℃)", "降水確率"];

  let hourlyDataList: string[][] = [];

  // FIXME: ベタ書きの記述になっているところを一括で取得できるようにしたい
  if (weatherDataList.length !== 0) {
    hourlyDataList = [
      [
        weatherDataList[1]["1"],
        weatherDataList[1]["2"],
        weatherDataList[1]["3"],
        weatherDataList[1]["5"],
      ],
      [
        weatherDataList[2]["1"],
        weatherDataList[2]["2"],
        weatherDataList[2]["3"],
        weatherDataList[2]["5"],
      ],
      [
        weatherDataList[3]["1"],
        weatherDataList[3]["2"],
        weatherDataList[3]["3"],
        weatherDataList[3]["5"],
      ],
      [
        weatherDataList[4]["1"],
        weatherDataList[4]["2"],
        weatherDataList[4]["3"],
        weatherDataList[4]["5"],
      ],
    ];
  }

  return (
    <View>
      <Table style={tailwind("border-0 pr-3")}>
        <Row
          data={tableHead}
          // FIXME: style={tailwind{}} で text のスタイルを指定しても反映されなかった
          textStyle={{
            textAlign: "center",
          }}
        />
        {hourlyDataList.map((rowData, index) => (
          <TableWrapper key={index} style={tailwind("flex-row")}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={
                  cellIndex === 1 && cellData ? (
                    <Image
                      style={tailwind("w-10 h-10 self-center")}
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
