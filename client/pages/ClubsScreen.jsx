import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles/ClubsScreenStyles";
import { useClubs } from "../context/ClubContext";

export default function ClubsScreen() {
  const { clubs, loading } = useClubs();

  const renderClub = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>שם מועדון: {item.name ?? "—"}</Text>
        <Text style={styles.text}>כתובת: {item.address ?? "—"}</Text>
        <Text style={styles.text}>אימייל: {item.email ?? "—"}</Text>
        <Text style={styles.text}>קישור: {item.link ?? "—"}</Text>
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
