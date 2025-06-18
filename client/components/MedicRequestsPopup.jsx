import { useMedicRequests } from "../context/MedicRequestContext";
import { View, TouchableOpacity, Text } from "react-native";
import { medicRequestsPopupStyles } from "../styles/medicRequestsPopupStyles";
const MedicRequestsPopup = ({ onClose }) => {
  const { medicRequests, approveRequest, rejectRequest } = useMedicRequests();

  return (
    <View style={medicRequestsPopupStyles.container}>
      <Text style={medicRequestsPopupStyles.title}>בקשות חובשים:</Text>

      {medicRequests.length === 0 ? (
        <Text style={medicRequestsPopupStyles.noRequests}>אין בקשות</Text>
      ) : (
        medicRequests
          .filter((request) => request.status === "pending")
          .map((request, index) => (
            <View key={index} style={medicRequestsPopupStyles.requestItem}>
              <Text>משחק: {request.match}</Text>
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
