import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import { useMedicRequests } from "../context/MedicRequestContext";
import { games } from "../data";
import { styles } from "../styles/MatchScreenStyles";
import { COLORS } from "../styles/GlobalStyles";

export default function MatchScreen({ onAddMedic }) {
  const { medicRequests } = useMedicRequests();

  const renderMatch = ({ item }) => {
    const request = medicRequests.find((r) => r.match === item.match);

    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.dateText}>תאריך: {item.time ?? "—"}</Text>
        </View>

        <Text style={styles.matchText}>משחק: {item.match ?? "—"}</Text>
        <Text style={styles.locationText}>מיקום: {item.location ?? "—"}</Text>

        {request ? (
          <Text
            style={{
              fontWeight: "bold",
              color:
                request.status === "approved"
                  ? "green"
                  : request.status === "rejected"
                  ? "red"
                  : "#555",
              marginTop: 10,
            }}
          >
            {request.status === "pending"
              ? "הבקשה נשלחה"
              : request.status === "approved"
              ? "הבקשה אושרה ✅"
              : "הבקשה נדחתה ❌"}
          </Text>
        ) : item.medicAvailable ? (
          <View
            style={[
              GlobalStyles.listButton,
              { marginTop: 10, backgroundColor: COLORS.red },
            ]}
          >
            <Text style={{ color: "white", textAlign: "center" }}>תפוס</Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => onAddMedic(item)}
            style={[GlobalStyles.listButton, { marginTop: 10 }]}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              בקש להצטרף כחובש
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={games}
      renderItem={renderMatch}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
