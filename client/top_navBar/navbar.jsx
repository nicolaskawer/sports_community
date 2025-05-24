import { View, TouchableOpacity } from "react-native";
import { navigations } from "../data";
import { NavbarStyles } from "../styles/navbarStyles";

const Navbar = () => {
  return (
    <View style={NavbarStyles.navbarContainer}>
      {navigations.map((item) => {
        const IconComponent = item.iconLib; // קבלת הקומפוננטה של האייקון

        if (item.to === "logo") {
          // הצגת הלוגו בלי כפתור
          return (
            <View key={item.id} style={NavbarStyles.iconBtn}>
              <IconComponent name={item.iconName} size={30} color="black" />
            </View>
          );
        }

        return (
          <TouchableOpacity key={item.id} style={NavbarStyles.iconBtn}>
            <IconComponent name={item.iconName} size={30} color="black" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navbar;
