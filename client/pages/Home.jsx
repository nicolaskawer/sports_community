import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../top_navBar/navbar";
import { games } from "../data";
import { HomeStyles } from "../styles/HomeStyles";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../fetch/users";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import ClubsScreen from "./ClubsScreen";
import { API_BASE_URL } from "../config";
const Home = () => {
  const [userName, setUserName] = useState("");
  const [clubsState, setClubsState] = useState([]);
  const [showClubs, setShowClubs] = useState(false);
  const [medicRequests, setMedicRequests] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const name = await fetchUser();
      if (name) setUserName(name);
    };
    getAllClubs();
    getUser();
  }, []);

  async function getAllClubs() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/clubs/api/clubs/puppeteer`
      );

      console.log("Data received:", response.data[0].name);

      setClubsState(response.data);
      return response.data;
    } catch (error) {
      alert(error);
      console.log(error.message);
    }
  }
  const handleAddMedicToClub = (club) => {
    setMedicRequests((prev) => [...prev, club]);
    alert(`הבקשה נשלחה למועדון ${club.name}`);
  };

  const handleAddMedic = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    if (game) {
      setMedicRequests((prev) => [...prev, game]);
      alert("הבקשה נשלחה למנהל המועדון.");
    }
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

      {/* כפתור להראות / להסתיר מועדונים */}
      <TouchableOpacity
        style={{
          backgroundColor: "#2196F3",
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
          alignSelf: "flex-start",
        }}
        onPress={() => setShowClubs((prev) => !prev)}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          {showClubs ? "הסתר מועדונים" : "הצג מועדונים"}
        </Text>
      </TouchableOpacity>

      {clubsState.length > 0 ? (
        <FlatList
          data={clubsState}
          renderItem={({ item }) => (
            <ClubsScreen club={item} onAddMedic={handleAddMedicToClub} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>לא נמצאו מועדונים</Text>
      )}

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
