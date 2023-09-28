import Footer from "./components/Footer";
import DayForecast from "./components/Fragments/DayForecast";
import HourlyUpdateCarousel from "./components/Fragments/HourlyUpdateCarousel";
import { MainCard, ChartCard } from "./components/Fragments/MainCard";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/Search";
import { useState, useEffect } from "react";
import { fetchDataApiWeather, fetchDataApiSelfIp } from "./utils/services";

function App() {
  const [searchData, setSearchData] = useState(null);
  const [myLocation, setMyLocation] = useState(null);
  const [resultsWeatherBySearch, setResultsWeatherBySearch] = useState(null);
  const [resultweatherSelfLocation, setResultweatherSelfLocation] = useState(null);

  let allResultsWeather = {
    mylocation: myLocation,
    resultweatherSelfLocation: resultweatherSelfLocation,
    resultsWeatherBySearch: resultsWeatherBySearch,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // mengambil ip sendiri untuk pertama kali
        if (searchData === undefined || searchData === null) {
          const initialData = await fetchDataApiSelfIp();
          setMyLocation(initialData);
        }

        // mencari weather by search jika searchData tidak null atau undefined
        if (searchData !== undefined && searchData !== null) {
          const initialData = await fetchDataApiWeather(searchData);
          setResultsWeatherBySearch(initialData);
        }
      } catch (error) {
        console.error(`${error}`);
      }
    };

    fetchData();
  }, [searchData]);

  // mencari data weather self location
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (myLocation !== undefined && myLocation !== null) {
          const initialData = await fetchDataApiWeather(myLocation.city);
          setResultweatherSelfLocation(initialData);
          setResultsWeatherBySearch(initialData);
        }
      } catch (error) {
        console.error(`error fetching : ${error}`);
      }
    };

    fetchData();
  }, [myLocation]);

  // Callback untuk menerima data dari SearchComponent
  const onDataReceived = (dataFromInput) => {
    setSearchData(dataFromInput);
  };
  return (
    <>
      <Navbar />
      <SearchComponent onDataReceived={onDataReceived} />
      <MainCard dataApiBysearch={allResultsWeather} />
      <ChartCard dataApiBysearchForChart={allResultsWeather} />
      <HourlyUpdateCarousel dataForHourly={allResultsWeather} />
      <DayForecast DayForecastFromAppJsx={allResultsWeather} />
      <Footer />
    </>
  );
}

export default App;
