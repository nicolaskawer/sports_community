import { useClubs } from "../context/ClubContext";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../top_navBar/navbar";
import { games } from "../data";
import { HomeStyles } from "../styles/HomeStyles";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../fetch/users";
import axios from "axios";
import ClubsScreen from "./ClubsScreen";
import { useMedicRequests } from "../context/MedicRequestContext";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [showClubs, setShowClubs] = useState(false);
  const { addMedicRequest, medicRequests } = useMedicRequests();
  const { clubs, loading } = useClubs();

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      setUserName(user);
    };

    getUser();
  }, []);

  const handleAddMedicToClub = (club) => {
    // checking if there is allready a existed request
    const existingRequest = medicRequests.find((r) => r.match === club.name);

    if (existingRequest) {
      return;
    }
    const newRequest = {
      id: Date.now(), // יוצר מזהה ייחודי לפי זמן
      match: club.name,
      status: "pending",
    };
    addMedicRequest(newRequest);
    alert(`הבקשה נשלחה למועדון ${club.name}`);
  };

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
      <ClubsScreen onAddMedic={handleAddMedicToClub} />
    </View>
  );
};

export default Home;
