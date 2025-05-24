// Navigator.jsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import FirstInteraction from "../pages/FirstInteraction";
import SignUp from "../pages/SignUp";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstInteraction">
        <Stack.Screen
          name="FirstInteraction"
          component={FirstInteraction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "SignUp" }}
        />
        {/* <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "הרשמה" }}
        />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
