import { StyleSheet } from "react-native";

export const medicRequestsPopupStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
    left: 0,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    zIndex: 999,
    width: 220,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  noRequests: {
    fontStyle: "italic",
    color: "gray",
  },
  requestItem: {
    marginBottom: 8,
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 4,
  },
  approveText: {
    color: "green",
  },
  rejectText: {
    color: "red",
  },
  closeButton: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  closeButtonText: {
    color: "gray",
  },
});
