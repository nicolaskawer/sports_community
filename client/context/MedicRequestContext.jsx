import React, { createContext, useContext, useState } from "react";

// צור את הקונטקסט
const MedicRequestContext = createContext();

export const useMedicRequests = () => useContext(MedicRequestContext);

// Provider
export const MedicRequestProvider = ({ children }) => {
  const [medicRequests, setMedicRequests] = useState([]);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [clubAnswers, setClubAnswers] = useState([]);

  const addClubAnswer = (answer) => {
    setClubAnswers((prev) => [...prev, answer]);
    setHasUnreadNotifications(true);
  };

  // מחזיר את כל הבקשות שאושרו לחובש מסוים
  const getApprovedRequestsForMedic = (medicId) => {
    return medicRequests.filter(
      (r) => r.medicId === medicId && r.status === "approved"
    );
  };

  // מחזיר בקשות שממתינות לאישור (למועדון)
  const getPendingRequestsForClub = (clubId) => {
    return medicRequests.filter(
      (r) => r.clubId === clubId && r.status === "pending"
    );
  };

  const markNotificationsAsRead = () => {
    setHasUnreadNotifications(false); // ✅ נלחץ על כפתור ההתראות => אין התראות לא נקראו
  };

  const addMedicRequest = (request) => {
    setMedicRequests((prev) => [...prev, request]);
    setHasUnreadNotifications(true);
  };

  const approveRequest = (requestId) => {
    setMedicRequests((prev) =>
      prev.map((r) => (r.id === requestId ? { ...r, status: "approved" } : r))
    );
  };

  const rejectRequest = (requestId) => {
    setMedicRequests((prev) =>
      prev.map((r) => (r.id === requestId ? { ...r, status: "rejected" } : r))
    );
  };

  return (
    <MedicRequestContext.Provider
      value={{
        medicRequests,
        setMedicRequests,
        addMedicRequest,
        approveRequest,
        rejectRequest,
        markNotificationsAsRead,
        hasUnreadNotifications,
        getApprovedRequestsForMedic,
        getPendingRequestsForClub,
        addClubAnswer,
      }}
    >
      {children}
    </MedicRequestContext.Provider>
  );
};
