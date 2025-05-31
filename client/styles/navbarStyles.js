import { StyleSheet } from 'react-native';

export const NavbarStyles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'green',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1000,
  },
  iconBtn: {
    padding: 10,
  },
  menuPopup: {
    position: "absolute",
    top: 50, // מתחת לכפתור
    right: 0,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 9999,
    width: 120,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
     
  
  },
  menuItemText: {
    fontSize: 16,
    textAlign: "right",
    color: "black",
  },
});
