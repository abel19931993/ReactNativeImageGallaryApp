// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import ImageShow from "./components/ImageShow";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Gallery" }}
        />
        <Stack.Screen
          name="showImage"
          component={ImageShow}
          options={{ headerShow: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
