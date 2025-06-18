import { createContext, useContext, useEffect, useState } from "react";
import { fetchClubs } from "../fetch/fetchClubs";

const ClubContext = createContext();

export const useClubs = () => useContext(ClubContext);

export const ClubProvider = ({ children }) => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClubs = async () => {
      try {
        const data = await fetchClubs();
        setClubs(data);
      } catch (error) {
        console.error("שגיאה בטעינת מועדונים:", error);
      } finally {
        setLoading(false);
      }
    };

    loadClubs();
  }, []);

  return (
    <ClubContext.Provider value={{ clubs, setClubs, loading }}>
      {children}
    </ClubContext.Provider>
  );
};
