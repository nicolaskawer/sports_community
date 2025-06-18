import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "../styles/ClubsScreenStyles";
import { GlobalStyles } from "../styles/GlobalStyles";
import { useClubs } from "../context/ClubContext";
import { useMedicRequests } from "../context/MedicRequestContext";

export default function ClubsScreen({ onAddMedic }) {
  const { clubs, loading } = useClubs();
  const { medicRequests } = useMedicRequests();

  const renderClub = ({ item }) => {
    const request = medicRequests.find((r) => r.match === item.name);

    return (
      <View style={styles.card}>
        <Text style={styles.text}>שם מועדון: {item.name ?? "—"}</Text>
        <Text style={styles.text}>כתובת: {item.address ?? "—"}</Text>
        <Text style={styles.text}>אימייל: {item.email ?? "—"}</Text>
        <Text style={styles.text}>קישור: {item.link ?? "—"}</Text>

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

  if (loading) {
    return <Text>טוען מועדונים...</Text>;
  }

  return (
    <FlatList
      data={clubs}
      renderItem={renderClub}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
