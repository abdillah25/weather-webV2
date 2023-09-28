import PropTypes from "prop-types";
import ChartInfo from "../ChartInfo";
import { LocationInfo, MainImage, MainInfo, SecondInfo } from "../WeatherInfo";

const MainCard = (props) => {
  const { dataApiBysearch } = props;
  const resultsWeatherBySearch = dataApiBysearch?.resultsWeatherBySearch;
  const temp = resultsWeatherBySearch?.current?.temp_c;
  const conditionInfo = resultsWeatherBySearch?.current?.condition?.text;
  const timeDateInfo = resultsWeatherBySearch?.location?.localtime;
  const cityNameInfo = resultsWeatherBySearch?.location?.name;
  const regionNameInfo = resultsWeatherBySearch?.location?.region;
  const countryNameInfo = resultsWeatherBySearch?.location?.country;
  const iconConditionInfo = resultsWeatherBySearch?.current?.condition?.icon;
  const fellsLikeConditionInfo = resultsWeatherBySearch?.current?.feelslike_c;
  const humidityConditionInfo = resultsWeatherBySearch?.current?.humidity;

  // aqi condition
  const aqi = resultsWeatherBySearch?.current?.air_quality["us-epa-index"];
  let aqiDescription = "";

  if (aqi === 1) {
    aqiDescription = "Good";
  } else if (aqi === 2) {
    aqiDescription = "Moderate";
  } else if (aqi === 3) {
    aqiDescription = "Unhealthy for sensitive group";
  } else if (aqi === 4) {
    aqiDescription = "Unhealthy";
  } else if (aqi === 5) {
    aqiDescription = "Very Unhealthy";
  } else if (aqi === 6) {
    aqiDescription = "Hazardous";
  } else {
    aqiDescription = "Unknown"; // Ini untuk penanganan nilai yang tidak dikenali
  }

  // jika LocationValueInfoByAppJsxUseState belum ada karena di inisialisasi di app.jsx ketika pertama kali di render jadi kita buat kondisional rendering di sini
  if (!dataApiBysearch || !temp) {
    return (
      <div className="mx-auto my-5 text-center  md:w-[70%] w-[90%] lg:w-[50%] shadow-[0_1px_4px_rgb(0,0,0,0.2)] rounded-xl h-[200px] flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div id="main-card-section" className="relative mb-5 md:w-[70%] w-[90%] flex flex-col justify-between  lg:w-[50%] bg-gradient-to-tr from-white to-sky-200  mx-auto rounded-xl hover:shadow-[0_1px_20px_rgb(0,0,0,0.12)] transition-all duration-300 p-5 mt-5">
      <div className="flex flex-col capitalize  h-[60%] justify-between ">
        <MainInfo timeDate={timeDateInfo} condition={conditionInfo} degreeCurrent={temp} className3={"text-[12px] md:text-[13px] lg:text-[14px]"} className1={"text-3xl font-medium md:text-4xl font-Oswald"} className2={"text-lg font-medium font-Kanit md:text-xl"} />
        <LocationInfo textSize={"text-sm md:text-base"} iconSize={"text-xl"} cityName={cityNameInfo} regionName={regionNameInfo} countryName={countryNameInfo} />
      </div>
      <div className="flex flex-wrap items-center justify-between w-full mt-5 capitalize gap-x-1 md:justify-between">
        <SecondInfo icon={"device_thermostat"} infoDes={fellsLikeConditionInfo + "°C"} description={"feels like"} />
        <SecondInfo icon={"humidity_mid"} infoDes={humidityConditionInfo} description={"humidity"} />
        <SecondInfo icon={"airwave"} infoDes={aqiDescription} description={"air condition"} />
      </div>
      <MainImage image={iconConditionInfo} />
    </div>
  );
};

MainCard.propTypes = {
  dataApiBysearch: PropTypes.object,
};

const ChartCard = (props) => {
  const { dataApiBysearchForChart } = props;

  if (!dataApiBysearchForChart) {
    return (
      <div className="mx-auto my-5 text-center  md:w-[70%] w-[90%] lg:w-[50%] shadow-[0_1px_4px_rgb(0,0,0,0.2)] rounded-xl h-[200px] flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div id="chart-card-section" className=" bg-white mb-5  md:w-[70%] w-[90%] lg:w-[50%]  shadow-[0_1px_20px_rgb(0,0,0,0.12)]  mx-auto rounded-xl p-5">
      <div className="w-full text-lg font-medium capitalize font-Kanit text">
        <h1>average daily temperature</h1>
        <ChartInfo dataWheatherForDisplayChart={dataApiBysearchForChart} />
      </div>
    </div>
  );
};
ChartCard.propTypes = {
  dataApiBysearchForChart: PropTypes.object,
};

export { MainCard, ChartCard };
