import { StyleSheet } from "react-native";
import { COLORS } from "./GlobalStyles";
export const styles = StyleSheet.create({

  card: {
    height:130,
    padding: 20,
    borderRadius: 25,
    marginBottom: 15,
    width:"90%",
    alignSelf:"center",
  backgroundColor:"hsla(0, 0.00%, 80.00%, 0.27)",
   overflow: "hidden", // מוודא שאין גלישה החוצה
    justifyContent: "center",



  },
  text: {

    fontSize: 16,
    textAlign: "right",
    marginBottom: 5,
    fontWeight: "bold",
   
   
  },
});
