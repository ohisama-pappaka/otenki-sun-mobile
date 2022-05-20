import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { DataTable } from "react-native-paper";

import DisplayWeatherCard from "src/components/home/DisplayWeatherCard";

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});

const Body = () => {
  const tailwind = useTailwind();
  const sunnyImagePath = "src/img/sunny.png";
  const highestTemperature = 30;
  const lowestTemperature = -40;

  return (
    <>
      <DisplayWeatherCard />

      <View style={styles.container}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Email</DataTable.Title>
            <DataTable.Title numeric>Age</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>John</DataTable.Cell>
            <DataTable.Cell>john@kindacode.com</DataTable.Cell>
            <DataTable.Cell numeric>33</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Bob</DataTable.Cell>
            <DataTable.Cell>test@test.com</DataTable.Cell>
            <DataTable.Cell numeric>105</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Mei</DataTable.Cell>
            <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
            <DataTable.Cell numeric>23</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </>
  );
};
export default Body;
