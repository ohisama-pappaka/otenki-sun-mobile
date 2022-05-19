import React from "react";
import { TailwindProvider } from "tailwind-rn";
// XXX: 警告が出ていることは確認している
import utilities from "./tailwind";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "src/Main";
import SettingTime from "src/SettingTime";

const Stack = createStackNavigator();

const App = () => (
  // XXX: Error を出してるが解消方法がわからない。ただ普通に動く
  <TailwindProvider utilities={utilities}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SettingTime" component={SettingTime} />
      </Stack.Navigator>
    </NavigationContainer>
  </TailwindProvider>
);

export default App;
