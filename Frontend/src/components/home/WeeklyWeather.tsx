import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";
import axios from "axios";

import { useAppSelector } from "src/hooks/hooks";

const DisplayWeeklyWeather = () => {
  const tailwind = useTailwind();
  const selectedPrefectureName = useAppSelector(
    (state) => state.prefectureName
  );
  const selectedCityName = useAppSelector((state) => state.cityName);
  const [weatherDataList, setWeatherDataList] = useState<string[][]>([]);

  // Weekly の天気データの取得
  useEffect(() => {
    const url =
      "http://10.0.2.2:8000/weekly/" +
      selectedPrefectureName +
      "/" +
      selectedCityName;
    axios
      .get(url)
      .then((res) => {
        setWeatherDataList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedPrefectureName, selectedCityName]);
  selectedCityName;
  const tableHead = [
    "日付",
    "天気",
    "最高気温(℃)",
    "最低気温(℃)",
    "降水確率",
  ];

  return (
    <>
      <Text style={tailwind("pt-4 pl-2 text-lg text-sky-500")}>週間天気</Text>
      <View>
        <Table style={tailwind("border-0 pr-3")}>
          <Row
            data={tableHead}
            // FIXME: style={tailwind{}} で text のスタイルを指定しても反映されなかった
            textStyle={{
              textAlign: "center",
            }}
          />
          {weatherDataList.map((rowData, index) => (
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
    </>
  );
};
export default DisplayWeeklyWeather;
