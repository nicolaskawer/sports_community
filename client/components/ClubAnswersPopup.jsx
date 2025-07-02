import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useMedicRequests } from "../context/MedicRequestContext";
import medicRequestsPopupStyles from "../styles/medicRequestsPopupStyles"; // שימוש באותו סגנון

const ClubAnswersPopup = ({ onClose, medicId }) => {
  const { medicRequests } = useMedicRequests();

  const answeredRequests = medicRequests.filter(
    (req) =>
      req.medicId === medicId &&
      (req.status === "approved" || req.status === "rejected")
  );

  return (
    <View style={medicRequestsPopupStyles.container}>
      <Text style={medicRequestsPopupStyles.title}>התשובות מהמועדונים:</Text>

      {answeredRequests.length === 0 ? (
        <Text style={medicRequestsPopupStyles.noRequests}>אין תשובות כרגע</Text>
      ) : (
        answeredRequests.map((request, index) => (
          <View key={index} style={medicRequestsPopupStyles.requestItem}>
            <Text>משחק: {request.match}</Text>
            <Text style={{ marginTop: 5 }}>
              סטטוס: {request.status === "approved" ? "מאושר" : "נדחה"}
            </Text>
          </View>
        ))
      )}

      <TouchableOpacity
        onPress={onClose}
        style={medicRequestsPopupStyles.closeButton}
      >
        <Text style={medicRequestsPopupStyles.closeButtonText}>סגור ✖</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClubAnswersPopup;
