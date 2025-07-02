import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../top_navBar/navbar";
import { games } from "../data";
import { HomeStyles } from "../styles/HomeStyles";
import React, { useEffect, useState } from "react";
import { fetchUser } from "../fetch/users";
import MatchScreen from "./MatchScreen";
import { useMedicRequests } from "../context/MedicRequestContext";
import Toast from "react-native-toast-message";

const Home = () => {
  const [userName, setUserName] = useState("");
  const { addMedicRequest, medicRequests } = useMedicRequests();

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser();
      setUserName(user);
    };

    getUser();
  }, []);

  const handleAddMedicToClub = (games) => {
    // checking if there is allready a existed request
    const existingRequest = medicRequests.find((r) => r.match === games.match);

    if (existingRequest) {
      return;
    }
    const newRequest = {
      id: Date.now(), // יוצר מזהה ייחודי לפי זמן
      match: games.match,
      status: "pending",
    };
    addMedicRequest(newRequest);
    Toast.show({
      type: "success",
      text1: "הבקשה נשלחה למשחק",
      text2: `${games.match}`,
    });
  };

  return (
    <View
      style={[
        GlobalStyles.content,
        GlobalStyles.textDefault,
        { paddingTop: 80 },
      ]}
    >
      <MatchScreen onAddMedic={handleAddMedicToClub} />
    </View>
  );
};

export default Home;
