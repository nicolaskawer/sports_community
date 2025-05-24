import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

import styles from "../styles/SignUpStyles";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!/^05\d{8}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "מספר טלפון לא תקין. יש להזין 10 ספרות המתחילות ב-05.";
    }

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
      Alert.alert("הצלחה", "הטופס נשלח בהצלחה!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>מספר טלפון</Text>
      <TextInput
        style={styles.inputField}
        placeholder="05XXXXXXXX"
        keyboardType="phone-pad"
        value={formData.phoneNumber}
        onChangeText={(value) => handleChange("phoneNumber", value)}
      />
      {errors.phoneNumber && (
        <Text style={styles.error}>{errors.phoneNumber}</Text>
      )}

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
        <Text style={styles.buttonText}>הרשמה</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
