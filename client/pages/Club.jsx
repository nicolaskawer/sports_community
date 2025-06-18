import { View, Text, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { clubStyles } from "../styles/ClubStyles";
import MedicRequestsPopup from "../components/MedicRequestsPopup";
import { useMedicRequests } from "../context/MedicRequestContext";
import { useState } from "react";

const Club = () => {
  const [showRequestsPopup, setShowRequestsPopup] = useState(false);

  const { medicRequests, approveRequest, rejectRequest } = useMedicRequests();

  // useEffect(() => {
  //   const getClubs = async () => {
  //     const clubs = await fetchClubs();
  //     setClubsState(clubs);
  //   };

  //   getClubs();
  // }, []);
  const handleApprove = (requestId) => {
    approveRequest(requestId);
  };

  const handleReject = (requestId) => {
    rejectRequest(requestId);
  };

  return (
    <View style={clubStyles.buttonContainer}>
      {showRequestsPopup && (
        <MedicRequestsPopup
          onClose={() => setShowRequestsPopup(false)}
          medicRequests={medicRequests}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}

      <TouchableOpacity
        style={clubStyles.button}
        onPress={() => setShowRequestsPopup(true)}
      >
        <MaterialIcons name="medical-services" style={clubStyles.icon} />
        <Text style={clubStyles.label}>שיבוץ חובש</Text>
      </TouchableOpacity>

      <TouchableOpacity style={clubStyles.button}>
        <Ionicons name="bus" style={clubStyles.icon} />
        <Text style={clubStyles.label}>הסעות</Text>
      </TouchableOpacity>

      <TouchableOpacity style={clubStyles.button}>
        <Entypo name="camera" style={clubStyles.icon} />
        <Text style={clubStyles.label}>צילום</Text>
      </TouchableOpacity>

      <TouchableOpacity style={clubStyles.button}>
        <FontAwesome5 name="first-aid" style={clubStyles.icon} />
        <Text style={clubStyles.label}>ציוד רפואי</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Club;
