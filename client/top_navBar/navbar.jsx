import { View, TouchableOpacity, Text } from "react-native";
import { navigations } from "../data";
import { NavbarStyles } from "../styles/navbarStyles";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute(); // Using useRoute() to check if already on the page.

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleNavigate = (screenName) => {
    setMenuVisible(false); // סוגר את התפריט

    // לנווט למסך בתוך ה-nested navigator "App"
    if (route.name !== screenName) {
      navigation.navigate("App", { screen: screenName }); // why app then , {screen}? because the same scrren name loceted in App(the appLayout calld App and not reffernd to App.js)
    }
  };

  return (
    <View style={NavbarStyles.navbarContainer}>
      {navigations.map((item) => {
        const IconComponent = item.iconLib;

        if (item.to === "logo") {
          return (
            <View key={item.id} style={NavbarStyles.iconBtn}>
              <IconComponent name={item.iconName} size={30} color="black" />
            </View>
          );
        }

        if (item.id === "menuButton") {
          return (
            <View key={item.id} style={{ position: "relative" }}>
              <TouchableOpacity
                style={NavbarStyles.iconBtn}
                onPress={toggleMenu}
              >
                <IconComponent name={item.iconName} size={30} color="black" />
              </TouchableOpacity>

              {menuVisible && (
                <View style={NavbarStyles.menuPopup}>
                  <TouchableOpacity
                    style={NavbarStyles.menuItem}
                    onPress={() => handleNavigate("Home")}
                  >
                    <Text style={NavbarStyles.menuItemText}>חובש</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={NavbarStyles.menuItem}
                    onPress={() => handleNavigate("Club")}
                  >
                    <Text style={NavbarStyles.menuItemText}>מועדון</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }

        return (
          <TouchableOpacity key={item.id} style={NavbarStyles.iconBtn}>
            <IconComponent name={item.iconName} size={30} color="black" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navbar;
