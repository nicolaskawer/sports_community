import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMedicRequests } from "../context/MedicRequestContext";
import MedicRequestsPopup from "../components/MedicRequestsPopup";
import { FontAwesome, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { navigations } from "../data";
import { NavbarStyles } from "../styles/navbarStyles";

const iconLibraries = {
  FontAwesome,
  Entypo,
  Feather,
  Ionicons,
};

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showRequestsPopup, setShowRequestsPopup] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { medicRequests } = useMedicRequests();

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const handleNavigate = (screenName) => {
    setMenuVisible(false);
    if (route.name !== screenName) {
      navigation.navigate("App", { screen: screenName });
    }
  };

  return (
    <View style={NavbarStyles.navbarContainer}>
      {/* Loop through navigation icons */}
      {navigations.map((item) => {
        const IconComponent = iconLibraries[item.iconLib];

        if (!IconComponent) return null;

        if (item.id === "logo") {
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
                activeOpacity={0.7}
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
          <TouchableOpacity
            key={item.id}
            style={NavbarStyles.iconBtn}
            onPress={() => handleNavigate(item.to)}
            activeOpacity={0.7}
          >
            <IconComponent name={item.iconName} size={30} color="black" />
          </TouchableOpacity>
        );
      })}

      {/* Notification icon */}
      <TouchableOpacity
        style={NavbarStyles.iconBtn}
        onPress={() => setShowRequestsPopup(true)}
        activeOpacity={0.7}
      >
        <Ionicons name="notifications" size={30} color="black" />
        {medicRequests.length > 0 && (
          <View style={NavbarStyles.notificationDot} />
        )}
      </TouchableOpacity>

      {showRequestsPopup && (
        <MedicRequestsPopup
          onClose={() => setShowRequestsPopup(false)}
          readOnly={route.name !== "Club"} // רק במועדון נוכל לאשר או לדחות
        />
      )}
    </View>
  );
};

export default Navbar;
