import React from "react";
import { TailwindProvider } from "tailwind-rn";
// XXX: 警告が出ていることは確認している
import utilities from "./tailwind";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import Home from "src/page/Home";
import DateRegistration from "src/page/DateRegistration";
import PointRegistration from "src/page/PointRegistration";
import Others from "src/page/Others";
import store from "src/store/store";

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    {/* XXX: Error を出してるが解消方法がわからない。ただ普通に動く */}
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
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "今日の天気", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="DateRegistration"
            component={DateRegistration}
            options={{
              title: "予定日の変更・削除",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="PointRegistration"
            component={PointRegistration}
            options={{ title: "登録地点変更", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Others"
            component={Others}
            options={{ title: "その他", headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  </Provider>
);

export default App;
