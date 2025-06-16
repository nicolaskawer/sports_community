import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../styles/SignInStyles";
import { useNavigation } from "@react-navigation/native";
import { people } from "../data";
import React, { useState, useEffect } from "react";

const SignIn = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (
      !/^[a-zA-Z0-9._%+-]+@(gmail|walla|hotmail|yahoo)\.(com|co\.il)$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "כתובת אימייל לא תקינה. יש להשתמש בדומיין מוכר (gmail, walla, וכו׳)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = () => {
    if (validate()) {
      const user = people.find(
        (person) =>
          person.email === formData.email &&
          person.password === formData.password
      );

      if (!user) {
        Alert.alert("שגיאה", "האימייל או הסיסמה שגויים");
        return;
      }

      // ניתוב בהתאם למשתמש
      if (user.email === "nicolaskawer@gmail.com") {
        navigation.navigate("App", { screen: "Home" });
      } else if (user.email === "d@gmail.com") {
        navigation.navigate("App", { screen: "Club" });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>אימייל</Text>
      <TextInput
        style={styles.inputField}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(value) => handleChange("email", value)}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Text style={styles.label}>סיסמא</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry={true}
        value={formData.password}
        onChangeText={(value) => handleChange("password", value)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>כניסה</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
