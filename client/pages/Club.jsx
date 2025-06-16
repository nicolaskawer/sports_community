import { View, Text, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { clubStyles } from "../styles/ClubStyles";

const Club = () => {
  return (
    <View style={clubStyles.buttonContainer}>
      <TouchableOpacity style={clubStyles.button}>
        <MaterialIcons name="medical-services" style={clubStyles.icon} />
        <Text style={clubStyles.label}>שיבוץ חובש</Text>
      </TouchableOpacity>

      <TouchableOpacity style={clubStyles.button}>
        <Ionicons name="bus" style={clubStyles.icon} />
        <Text style={clubStyles.label}>הסעות</Text>
      </TouchableOpacity>

      <TouchableOpacity style={clubStyles.button}>
        <Entypo name="camera" style={clubStyles.icon} />
        <Text style={clubStyles.label}>צילום</Text>
      </TouchableOpacity>

      <TouchableOpacity style={clubStyles.button}>
        <FontAwesome5 name="first-aid" style={clubStyles.icon} />
        <Text style={clubStyles.label}>ציוד רפואי</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Club;
