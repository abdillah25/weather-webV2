import axios from "axios";

// Fungsi untuk mengambil data dari API
export const fetchDataApiWeather = async (location) => {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_APP_WEATHER_API_KEY}&q=${location}&days=3&aqi=yes&alerts=no`);
    return response.data;
  } catch (error) {
    // Tangani kesalahan jika terjadi
    console.error("Kesalahan dalam memanggil API:", error);
    throw error;
  }
};

// Fungsi untuk mengambil data dari API
export const fetchDataApiSelfIp = async () => {
  try {
    const response = await axios.get(`https://api.db-ip.com/v2/free/self`);
    return response.data;
  } catch (error) {
    // Tangani kesalahan jika terjadi
    console.error("Kesalahan dalam memanggil API:", error);
    throw error;
  }
};
