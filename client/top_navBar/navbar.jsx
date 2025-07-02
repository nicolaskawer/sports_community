import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useUser } from "../context/UserContext";
import { usePopup } from "../context/PopupContext";
import { handleNavigateApp } from "../context/NavigationUtils";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useMedicRequests } from "../context/MedicRequestContext";
import MedicRequestsPopup from "../components/MedicRequestsPopup";
import { NavbarStyles } from "../styles/navbarStyles";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { currentUser } = useUser();
  const { setCloseAllPopups } = usePopup();
  const { medicRequests, clubAnswers, getPendingRequestsForClub } =
    useMedicRequests();
  const isClub = currentUser?.role === "club";
  const isMedic = currentUser?.role === "medic";

  const screenWidth = Dimensions.get("window").width;

  const handleClosePopups = useCallback(() => {
    setIsMenuVisible(false);
    setIsNotificationsVisible(false);
  }, []);

  useEffect(() => {
    handleClosePopups();
  }, [route.name, handleClosePopups]);

  useEffect(() => {
    setCloseAllPopups(() => handleClosePopups);
  }, [setCloseAllPopups, handleClosePopups]);

  const handleNavigateA = (screenName) => {
    handleNavigateApp(navigation, route, screenName, handleClosePopups);
  };

  const handleMenuPress = () => {
    setIsNotificationsVisible(false);
    setIsMenuVisible((prev) => !prev);
  };

  const handleNotificationsPress = () => {
    setIsMenuVisible(false);
    setIsNotificationsVisible((prev) => !prev);
  };

  const pendingCount = isClub
    ? getPendingRequestsForClub(currentUser.club).length
    : medicRequests.length;

  return (
    <View style={NavbarStyles.navbarContainer}>
      {/* תפריט צד ימין */}
      {isMenuVisible && (
        <View
          style={[
            NavbarStyles.menuPopup,
            { right: 10, maxWidth: screenWidth * 0.6 },
          ]}
        >
          <TouchableOpacity
            style={NavbarStyles.menuItem}
            onPress={() => handleNavigateA("Home")}
          >
            <Text style={NavbarStyles.menuItemText}>חובש</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={NavbarStyles.menuItem}
            onPress={() => handleNavigateA("Club")}
          >
            <Text style={NavbarStyles.menuItemText}>מועדון</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={NavbarStyles.menuItem}
            onPress={() => handleNavigateA("ClubsScreen")}
          >
            <Text style={NavbarStyles.menuItemText}>רשימת מועדונים</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[NavbarStyles.menuItem, NavbarStyles.logoutItem]}
            onPress={() => {
              handleClosePopups();
              navigation.navigate("SignIn");
            }}
          >
            <Text style={[NavbarStyles.menuItemText, NavbarStyles.logoutText]}>
              התנתקות
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* שורת ניווט */}
      <View style={NavbarStyles.navbarRow}>
        <TouchableOpacity
          style={NavbarStyles.iconBtn}
          onPress={handleMenuPress}
          activeOpacity={0.7}
        >
          <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>

        <Text style={NavbarStyles.userGreeting}>שלום {currentUser?.name}</Text>

        <TouchableOpacity
          style={NavbarStyles.iconBtn}
          onPress={handleNotificationsPress}
          activeOpacity={0.7}
        >
          <Ionicons name="notifications-outline" size={28} color="black" />
        </TouchableOpacity>
        {pendingCount > 0 && (
          <View
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              backgroundColor: "red",
              borderRadius: 10,
              minWidth: 18,
              height: 18,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 11, fontWeight: "bold" }}>
              {pendingCount}
            </Text>
          </View>
        )}
      </View>
      {/* פופאפ לפי סוג משתמש */}
      {isNotificationsVisible && (
        <MedicRequestsPopup
          onClose={handleClosePopups}
          readOnly={route.name === "Club"}
          userType={currentUser.role}
          userIdentifier={isClub ? currentUser.club : currentUser.name}
        />
      )}
    </View>
  );
};

export default Navbar;
