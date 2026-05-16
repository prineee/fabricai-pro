import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const askAI = async (prompt) => {
  const token =
    localStorage.getItem("fabricaiToken");

  const response = await API.post(
    "/ai/chat",
    { prompt },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};