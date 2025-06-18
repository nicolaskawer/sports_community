import axios from "axios";
import { API_BASE_URL } from "../config";

export const fetchClubs = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/clubs/api/clubs/puppeteer`
    );
    console.log("Data received:", response.data[0].name);
    return response.data;
  } catch (error) {
    console.error("Error fetching clubs:", error.message);
    throw error;
  }
};
