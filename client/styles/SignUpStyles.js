import { StyleSheet } from "react-native";

const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FAFAFA",
  },
  label: {
    marginTop: 16,
    fontWeight: "600",
    fontSize: 16,
    color: "#222",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginTop: 8,
    fontSize: 16,
    backgroundColor: "#FFF",
   
  },
  error: {
    color: "#D32F2F",
    marginTop: 6,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#FF8800",
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 36,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 24,
    maxHeight: "75%",
  },
  modalItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  modalItemText: {
    fontSize: 16,
    color: "#333333",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#E53935",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default SignUpStyles;