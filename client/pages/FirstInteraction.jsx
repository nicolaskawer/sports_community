import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../styles/GlobalStyles";

const FirstInteraction = () => {
  const navigation = useNavigation();

  return (
    <View style={{ gap: 18, marginTop: 100, backgroundColor: "red" }}>
      <TouchableOpacity
        style={[GlobalStyles.btn, GlobalStyles.btnPrimary]}
        onPress={() => navigation.navigate("SignUp")} // שם המסך שאליו אתה רוצה לנווט
      >
        <Text style={GlobalStyles.btnText}>הרשמה</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[GlobalStyles.btn, GlobalStyles.btnSecondary]}
        onPress={() => navigation.navigate("SignIn")} // why app u ask? cuz in the navigator the appLayout calld app if u will see
      >
        <Text style={GlobalStyles.btnTextAlt}>התחברות</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstInteraction;
