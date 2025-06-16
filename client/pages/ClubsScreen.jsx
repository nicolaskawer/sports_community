// ClubsScreen.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/ClubsScreenStyles";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function ClubsScreen({ club, onAddMedic }) {
  const [showButton, setShowButton] = useState(false);

  const handleClubPress = () => {
    setShowButton((prev) => !prev);
  };

  return (
    <TouchableOpacity onPress={handleClubPress} style={styles.card}>
      <Text style={styles.text}>שם מועדון: {club.name ?? "—"}</Text>
      <Text style={styles.text}>כתובת: {club.address ?? "—"}</Text>
      <Text style={styles.text}>אימייל: {club.email ?? "—"}</Text>
      <Text style={styles.text}>קישור: {club.link ?? "—"}</Text>

      {showButton && (
        <TouchableOpacity
          onPress={() => onAddMedic(club)}
          style={GlobalStyles.listButton}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            בקש להצטרף כחובש
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}
