import { API_BASE_URL } from "../config";
export const fetchUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.name; // מחזיר רק את השם
  } catch (error) {
    console.error("Error fetching user:", error);
    return null; // תחזיר null במקרה של שגיאה
  }
};
