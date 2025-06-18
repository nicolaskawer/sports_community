import React, { createContext, useContext, useState } from "react";

// צור את הקונטקסט
const MedicRequestContext = createContext();

export const useMedicRequests = () => useContext(MedicRequestContext);

// Provider
export const MedicRequestProvider = ({ children }) => {
  const [medicRequests, setMedicRequests] = useState([]);

  const addMedicRequest = (request) => {
    setMedicRequests((prev) => [...prev, request]);
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
      }}
    >
      {children}
    </MedicRequestContext.Provider>
  );
};
