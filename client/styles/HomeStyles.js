import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    
  },
  gameCard: {
    backgroundColor: "#eee",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    width: "90%",
    direction: "rtl", 
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center',          


    direction:"rtl",    
  },
  gameTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 4,
    textAlign: "right",         
  },
  gameText: {
    fontSize: 16,
    textAlign: "right",         
  },
});
