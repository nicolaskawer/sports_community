import { StyleSheet } from "react-native";
import { COLORS } from "./GlobalStyles";

const SignInStyles = StyleSheet.create({
  container: {
   flexDirection:"column",
   
   height:"100%",
  justifyContent: "flex-end", 
  alignItems: "center", 
  },
  logContainer:{
    width:"70%",
    justifyContent: "flex-end", 
  alignItems: "center", 
    
  },
  label: {
    marginTop: 10,
 
  textAlign: "right",
  writingDirection: "rtl",
  alignSelf: "flex-end", // זה המפתח!
  marginRight: "6%",     // הזחה מהקצה הימני (תאם לרוחב שדה הקלט)
   

  },
  inputField: {
    width:"100%",
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 25,
    padding: 12,
    marginTop: 5,
    fontSize: 20,
    backgroundColor: "#fff",
    textAlign: "right",
    writingDirection: "rtl",
   
  },
  error: {
    color: "red",
    marginTop: 4,
  },
  button: {
    width:"100%",
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 25,
    marginTop: 25,
    alignItems: "center",
    marginBottom:20,
   
  },
    socialButtonsContainer: {
    flexDirection: "column",
    marginTop: 100,
    gap: 20, 
    marginBottom:30,

  },
  socialButton: {
    width:370,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
    elevation: 3, 
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowOffset: { width: 5, height: 2 },
    shadowRadius: 4,
    height:50,
  },
  socialIcon: {
    width: 40,
    height: 30,
    resizeMode: "contain",
  },

});

export default SignInStyles;
