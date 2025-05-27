export const fetchUser = async () => {
  const API_URL = "http://192.168.192.1:3000";
  try {
    const response = await fetch(`${API_URL}/users/`);
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
