import CarouselChild from "../CarouselChild";
import PropTypes from "prop-types";

const DayForecast = (props) => {
  const { DayForecastFromAppJsx } = props;
  const dayForecast = DayForecastFromAppJsx?.resultsWeatherBySearch?.forecast?.forecastday;
  const locationBySearch = DayForecastFromAppJsx?.resultsWeatherBySearch?.location;

  if (!DayForecastFromAppJsx || (!DayForecast && !dayForecast === null) || dayForecast === undefined) {
    return (
      <div className=" mx-auto  md:w-[70%] w-[90%] lg:w-[50%]">
        <div className="w-full p-3 space-x-4 bg-transparent carousel carousel-center rounded-box">
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[50px] w-[200px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[50px] w-[200px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[50px] w-[200px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
        </div>
      </div>
    );
  }

  return (
    <div id="day-forecast-section" className=" bg-white mb-5 mx-auto  md:w-[70%] w-[90%] lg:w-[50%] rounded-xl   flex items-center  flex-col p-5">
      <div className="self-start w-full mb-2 text-lg font-medium capitalize font-Kanit">
        <h1>day forecast</h1>
        <span className="material-symbols-outlined text-[13px]">location_on</span>{" "}
        <span className="text-[13px]">
          {locationBySearch.name}, {locationBySearch.region}, {locationBySearch.country}
        </span>
      </div>
      <div className="w-full p-3 space-x-4 bg-transparent carousel carousel-center rounded-box">
        {dayForecast.map((item, index) => {
          return (
            <CarouselChild key={index} className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)] text-black h-[60px] rounded-xl  w-[190px] p-3 relative"}>
              <div className="flex flex-col justify-around">
                <div className="capitalize">
                  <span className="text-base font-bold font-Kani">{item?.day?.avgtemp_c}°C</span> <br />
                  <span className="text-[12px]">{item?.day?.condition?.text}</span>
                </div>
                <div className="capitalize">
                  <span className="text-[12px] font-bold font-Kani">{item?.date}</span>
                </div>
              </div>
              <div className="absolute w-[50px] -right-0 -top-0">
                <img src={item?.day?.condition?.icon} alt="icons" />
              </div>
            </CarouselChild>
          );
        })}
      </div>
    </div>
  );
};
DayForecast.propTypes = {
  DayForecastFromAppJsx: PropTypes.object,
};

export default DayForecast;
