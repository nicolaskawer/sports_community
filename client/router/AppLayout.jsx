// This file was created to move screens smoothly and the navbar will not disappear and can be used on all pages below.
import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Club from "../pages/Club";
import Navbar from "../top_navBar/navbar";

const Stack = createNativeStackNavigator();

const AppLayout = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Club" component={Club} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70, //מרווח מה navbar
  },
});

export default AppLayout;
