import { StyleSheet } from "react-native";

export const clubStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, // מרווח מהחלק העליון שיהיה מקום לאייקון
    paddingHorizontal: 16,
  },
  notificationIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    marginTop: 40, // שיידחוף את הכפתורים מטה מתחת לאייקון
  },
  button: {
    alignItems: "center",
  },
  icon: {
    fontSize: 36,
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
  },
});
