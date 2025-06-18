import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClubProvider } from "../context/ClubContext";

import FirstInteraction from "../pages/FirstInteraction";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AppLayout from "./AppLayout";
import { MedicRequestProvider } from "../context/MedicRequestContext";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <MedicRequestProvider>
      <ClubProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="FirstInteraction">
            <Stack.Screen
              name="FirstInteraction"
              component={FirstInteraction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App"
              component={AppLayout}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ClubProvider>
    </MedicRequestProvider>
  );
};

export default Navigator;
