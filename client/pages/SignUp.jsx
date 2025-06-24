import React, { useState, useEffect, useContext } from "react";
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
  ActivityIndicator,
  Modal,
  FlatList,
} from "react-native";
import styles from "../styles/SignUpStyles";
import { fetchClubs } from "../fetch/fetchClubs";
import { Picker } from "@react-native-picker/picker";
import { useUser } from "../context/UserContext";
import { GlobalStyles } from "../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "medic",
    club: "",
    clubCode: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [clubs, setClubs] = useState([]);
  const [loadingClubs, setLoadingClubs] = useState(true);
  const [clubModalVisible, setClubModalVisible] = useState(false);
  const { setUsers, setCurrentUser } = useUser();

  useEffect(() => {
    const getClubs = async () => {
      try {
        const allClubs = await fetchClubs();
        const availableClubs = allClubs.filter((club) => !club.isRegistered);
        setClubs(availableClubs);
      } catch (error) {
        console.error("Failed to fetch clubs:", error);
      } finally {
        setLoadingClubs(false);
      }
    };

    getClubs();
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.name && formData.role === "medic") {
      newErrors.name = "יש להזין שם כחובש.";
    }

    if (!/^05\d{8}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "מספר טלפון לא חוקי. חייב להתחיל ב-05 ולהכיל 10 ספרות.";
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@(gmail|walla|hotmail|yahoo)\.(com|co\.il)$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "כתובת מייל לא חוקית. השתמש בדומיין מוכר (gmail, walla, וכו').";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "הסיסמה חייבת להכיל לפחות 6 תווים.";
    }

    if (formData.role === "club") {
      if (!formData.club) {
        newErrors.club = "יש לבחור מועדון";
      }
      if (formData.clubCode !== "1111") {
        newErrors.clubCode = "קוד הרשמה שגוי.";
      }
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
      setSubmitting(true);
      console.log("Submitting user:", formData);
      setTimeout(() => {
        setUsers((prev) => [...prev, formData]);
        setCurrentUser(formData);

        Alert.alert(
          "הצלחה!",
          "ההרשמה בוצעה בהצלחה",
          [
            {
              text: "אישור",
              onPress: () => {
                // איפוס הטופס
                setFormData({
                  name: "",
                  email: "",
                  phoneNumber: "",
                  password: "",
                  role: "medic",
                  club: "",
                  clubCode: "",
                });
                navigation.navigate("SignIn");
              },
            },
          ],
          { cancelable: false }
        );

        setSubmitting(false);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={GlobalStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={GlobalStyles.backButtonText}>←</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={[{ paddingBottom: 60 }]}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.label}>בחר תפקיד</Text>
            <Picker
              selectedValue={formData.role}
              onValueChange={(value) => handleChange("role", value)}
              style={styles.inputField}
            >
              <Picker.Item label="Medic" value="medic" />
              <Picker.Item label="Club" value="club" />
            </Picker>

            {formData.role === "medic" && (
              <>
                <Text style={styles.label}>שם</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="הכנס את שמך"
                  value={formData.name}
                  onChangeText={(value) => handleChange("name", value)}
                />
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
              </>
            )}

            {formData.role === "club" && (
              <>
                <Text style={styles.label}>בחר מועדון</Text>
                {loadingClubs ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  <>
                    <TouchableOpacity
                      style={styles.inputField}
                      onPress={() => setClubModalVisible(true)}
                    >
                      <Text style={{ color: formData.club ? "#000" : "#aaa" }}>
                        {formData.club || "בחר מועדון..."}
                      </Text>
                    </TouchableOpacity>
                    {errors.club && (
                      <Text style={styles.error}>{errors.club}</Text>
                    )}
                  </>
                )}

                <Text style={styles.label}>קוד מועדון</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="הכנס קוד מועדון"
                  secureTextEntry={true}
                  value={formData.clubCode}
                  onChangeText={(value) => handleChange("clubCode", value)}
                />
                {errors.clubCode && (
                  <Text style={styles.error}>{errors.clubCode}</Text>
                )}
              </>
            )}

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

            <Text style={styles.label}>איימל</Text>
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
              placeholder="הכנס סיסמא"
              secureTextEntry={true}
              value={formData.password}
              onChangeText={(value) => handleChange("password", value)}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              // disabled={submitting}
            >
              {submitting ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </TouchableOpacity>

            {/* Modal for club selection */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={clubModalVisible}
              onRequestClose={() => setClubModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.label}>בחר מועדון</Text>
                  <FlatList
                    data={clubs}
                    keyExtractor={(item) => item.name}
                    style={{ maxHeight: 300 }}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.modalItem}
                        onPress={() => {
                          handleChange("club", item.name);
                          setClubModalVisible(false);
                        }}
                      >
                        <Text style={styles.modalItemText}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
                  <TouchableOpacity
                    onPress={() => setClubModalVisible(false)}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>סגור</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignUp;
