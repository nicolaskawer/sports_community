import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../top_navBar/navbar";
import { games } from "../data";
import { HomeStyles } from "../styles/HomeStyles";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../fetch/users";
import { useNavigation, useRoute } from "@react-navigation/native";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const name = await fetchUser();
      if (name) setUserName(name);
    };

    getUser();
  }, []);

  const handleAddMedic = (gameId) => {
    //here we will add what the click on the button will do
    console.log(`הוספת חובש למשחק עם id ${gameId}`);
  };

  const renderGameItem = ({ item }) => (
    <View style={HomeStyles.gameCard}>
      <Text style={HomeStyles.gameTitle}>משחק: {item.match}</Text>
      <Text style={HomeStyles.gameText}>שעה: {item.time}</Text>
      <Text style={HomeStyles.gameText}>מיקום: {item.location}</Text>
      <Text style={HomeStyles.gameText}>
        חובש: {item.medicAvailable ? "קיים" : "חסר"}
      </Text>

      {!item.medicAvailable && (
        <TouchableOpacity
          style={GlobalStyles.listButton}
          onPress={() => handleAddMedic(item.id)}
        >
          <Text style={{ color: "white", fontSize: 16 }}>הוסף חובש</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={[GlobalStyles.content, GlobalStyles.textDefault]}>
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

      <FlatList
        data={games}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%" }}
        contentContainerStyle={{ direction: "rtl" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
