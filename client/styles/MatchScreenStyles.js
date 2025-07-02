import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    width: "100%", // תופס את כל הרוחב
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "flex-start", // תאריך בצד שמאל
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: "#666",
    textAlign: "left",
  },
  matchText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    color: "#333",
    marginBottom: 5,
  },
  locationText: {
    fontSize: 16,
    textAlign: "right",
    color: "#333",
    marginBottom: 5,
  },
});
