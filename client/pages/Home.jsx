import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../top_navBar/navbar";
import { games } from "../data";
import { HomeStyles } from "../styles/HomeStyles";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../fetch/users";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const name = await fetchUser();
      if (name) setUserName(name);
    };

    getUser();
  }, []);

  const renderGameItem = ({ item }) => (
    <View style={HomeStyles.gameCard}>
      <Text style={HomeStyles.gameTitle}>משחק: {item.game}</Text>
      <Text style={HomeStyles.gameText}>שעה: {item.time}</Text>
      <Text style={HomeStyles.gameText}>מיקום: {item.location}</Text>
      <Text style={HomeStyles.gameText}>
        חובש: {item.medic ? "קיים" : "חסר"}
      </Text>
    </View>
  );

  return (
    <View style={[GlobalStyles.content, GlobalStyles.textDefault]}>
      {" "}
      {/* מחילים direction מימין לשמאל */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "right",
        }}
      >
        שלום {userName}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginBottom: 20,
          alignSelf: "flex-end", // ליישר את הכפתור לימין
        }}
      >
        <Text style={{ color: "white" }}>כפתור</Text>
      </TouchableOpacity>
      <FlatList
        data={games}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%" }}
        contentContainerStyle={{ direction: "rtl" }} // חשוב לכיוון ה-flatlist
        showsVerticalScrollIndicator={false}
      />
      <Navbar />
    </View>
  );
};

export default Home;
