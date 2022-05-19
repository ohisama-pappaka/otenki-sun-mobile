import React from "react";
import { TailwindProvider } from "tailwind-rn";
// XXX: 警告が出ていることは確認している
import utilities from "./tailwind";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "src/page/Home";
import DateRegistration from "src/page/DateRegistration";
import PointRegistration from "src/page/PointRegistration";
import Others from "src/page/Others";

const Stack = createStackNavigator();

const App = () => (
  // XXX: Error を出してるが解消方法がわからない。ただ普通に動く
  <TailwindProvider utilities={utilities}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0EA5E9",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DateRegistration" component={DateRegistration} />
        <Stack.Screen name="PointRegistration" component={PointRegistration} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
  </TailwindProvider>
);

export default App;
