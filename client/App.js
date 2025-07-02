import React from "react";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Navigator from "./router/Navigator";
import { GlobalStyles } from "./styles/GlobalStyles";
import { MedicRequestProvider } from "./context/MedicRequestContext";
import { PopupProvider, usePopup } from "./context/PopupContext";
import Toast from "react-native-toast-message";
const DismissWrapper = ({ children }) => {
  const { closeAllPopups } = usePopup();

  const handlePress = () => {
    Keyboard.dismiss();
    closeAllPopups(); // סגור כל הפופאפים שרשומים
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <SafeAreaView style={GlobalStyles.appContainer}>{children}</SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default function App() {
  return (
    <PopupProvider>
      <DismissWrapper>
        <MedicRequestProvider>
          <Navigator />
        </MedicRequestProvider>
      </DismissWrapper>
      <Toast/>
    </PopupProvider>
  );
}
