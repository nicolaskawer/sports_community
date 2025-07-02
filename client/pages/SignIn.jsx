import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "../styles/SignInStyles";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import { useUser } from "../context/UserContext";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Image } from "react-native";

const SignIn = () => {
  const navigation = useNavigation();

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { users, setCurrentUser } = useUser();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (
      !/^[a-zA-Z0-9._%+-]+@(gmail|walla|hotmail|yahoo)\.(com|co\.il)$/.test(
        signInForm.email
      )
    ) {
      newErrors.email =
        "כתובת אימייל לא תקינה. יש להשתמש בדומיין מוכר (gmail, walla, וכו׳)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setSignInForm({ ...signInForm, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = () => {
    if (validate()) {
      // למצוא משתמש לפי אימייל
      const matchedUser = users.find((u) => u.email === signInForm.email);

      if (!matchedUser) {
        Alert.alert("שגיאה", "אימייל לא נמצא במערכת");
        return;
      }

      // לבדוק שהסיסמה תואמת
      if (matchedUser.password !== signInForm.password) {
        Alert.alert("שגיאה", "סיסמה שגויה");
        return;
      }

      // לשמור את המשתמש הנוכחי
      setCurrentUser(matchedUser);

      // ניווט לפי תפקיד
      if (matchedUser.role === "club") {
        navigation.navigate("App", { screen: "Club" });
      } else {
        navigation.navigate("App", { screen: "Home" });
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logContainer}>
            <Text style={styles.label}>אימייל</Text>
            <TextInput
              style={styles.inputField}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              value={signInForm.email}
              onChangeText={(value) => handleChange("email", value)}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <Text style={styles.label}>סיסמא</Text>
            <TextInput
              style={styles.inputField}
              placeholder="סיסמא"
              secureTextEntry={true}
              value={signInForm.password}
              onChangeText={(value) => handleChange("password", value)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>כניסה</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text>לא רשום? הירשם עכשיו</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../assets/icons/gmail.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../assets/icons/facebook.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../assets/icons/linkedin.png")}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
