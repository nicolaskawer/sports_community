import { StyleSheet } from "react-native";

const SignUpStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginTop: 10,
    fontWeight: "bold",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginTop: 5,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#ffaa00",
    padding: 14,
    borderRadius: 10,
    marginTop: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignUpStyles;
