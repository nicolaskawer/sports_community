import { StyleSheet } from "react-native";
import { COLORS } from "./GlobalStyles";

export const NavbarStyles = StyleSheet.create({
  navbarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    backgroundColor: COLORS.primary,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    zIndex: 1000,
    elevation: 10,
    
  },

  navbarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    direction: "rtl",
  },

  iconBtn: {
    padding: 10,
  },

  notificationDot: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
notificationBadge: {
  position: 'absolute',
  top: -4,
  right: -4,
  backgroundColor: 'red',
  borderRadius: 10,
  minWidth: 18,
  height: 18,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 4,
  zIndex: 1,
},
notificationText: {
  color: 'white',
  fontSize: 10,
  fontWeight: 'bold',
},

  menuPopup: {
    position: "absolute",
    top: 80,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    zIndex: 101,
  },

  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  menuItemText: {
    fontSize: 16,
    color: "black",
  },

  logoutItem: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 10,
  },

  logoutText: {
    color: "red",
  },
});
