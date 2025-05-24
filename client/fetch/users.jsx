export const fetchUser = async () => {
  try {
    const response = await fetch("http://192.168.50.56:3000/users/");
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
