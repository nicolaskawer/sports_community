import { useMedicRequests } from "../context/MedicRequestContext";
import { medicRequestsPopupStyles } from "../styles/medicRequestsPopupStyles";
import { TouchableOpacity, View, Text } from "react-native";
import { COLORS } from "../styles/GlobalStyles";

const MedicRequestsPopup = ({ onClose, userType }) => {
  const { medicRequests, approveRequest, rejectRequest } = useMedicRequests();

  const filteredRequests =
    userType === "club"
      ? medicRequests.filter((req) => req.status === "pending")
      : medicRequests.filter(
          (req) => req.status === "approved" || req.status === "rejected"
        );

  return (
    <View style={medicRequestsPopupStyles.container}>
      <Text style={medicRequestsPopupStyles.title}>
        {userType === "club" ? "בקשות חובשים:" : "התשובות מהמועדונים:"}
      </Text>

      {filteredRequests.length === 0 ? (
        <Text style={medicRequestsPopupStyles.noRequests}>
          {userType === "club" ? "אין בקשות" : "אין תשובות"}
        </Text>
      ) : (
        filteredRequests.map((request, index) => (
          <View key={index} style={medicRequestsPopupStyles.requestItem}>
            <Text>משחק: {request.match}</Text>
            {userType === "club" && (
              <View style={medicRequestsPopupStyles.buttonRow}>
                <TouchableOpacity onPress={() => approveRequest(request.id)}>
                  <Text style={medicRequestsPopupStyles.approveText}>
                    ✔ אשר
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => rejectRequest(request.id)}>
                  <Text style={medicRequestsPopupStyles.rejectText}>✖ דחה</Text>
                </TouchableOpacity>
              </View>
            )}
            {userType === "medic" && (
              <Text
                style={{
                  marginTop: 5,
                  color:
                    request.status === "approved" ? COLORS.primary : COLORS.red,
                }}
              >
                סטטוס: {request.status === "approved" ? "מאושר" : "נדחה"}
              </Text>
            )}
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

export default MedicRequestsPopup;
