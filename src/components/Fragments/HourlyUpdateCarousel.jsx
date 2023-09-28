import CarouselChild from "../CarouselChild";
import PropTypes from "prop-types";

const HourlyUpdateCarousel = (props) => {
  const { dataForHourly } = props;
  const hourlyUpdate = dataForHourly?.resultsWeatherBySearch?.forecast?.forecastday[0].hour;
  const locationBySearch = dataForHourly?.resultsWeatherBySearch?.location;
  if (!dataForHourly || !hourlyUpdate) {
    return (
      <div className=" mx-auto  md:w-[70%] w-[90%] lg:w-[50%]">
        <div className="w-full p-3 space-x-4 bg-transparent carousel carousel-center rounded-box">
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
          <CarouselChild className={"shadow-[0_1px_5px_rgb(0,0,0,0.2)]  h-[100px] rounded-xl  transition-all duration-300 flex flex-col p-2 items-center text-black justify-around"}>
            <div className="mx-auto my-5 text-center scale-50">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          </CarouselChild>
        </div>
      </div>
    );
  }

  function fullTime(time) {
    const timeFromPharam = time;
    return timeFromPharam.slice(11);
  }

  return (
    <div id="hourly-carousel-section" className="mx-auto bg-white mb-5 md:w-[70%] w-[90%] lg:w-[50%] rounded-xl flex items-center flex-col p-5">
      <div className="self-start w-full mb-2 text-lg font-medium capitalize font-Kanit">
        <h1>Hourly Update</h1>
        <span className="material-symbols-outlined text-[13px]">location_on</span>{" "}
        <span className="text-[13px]">
          {locationBySearch.name}, {locationBySearch.region}, {locationBySearch.country}
        </span>
      </div>
      <div className="w-full p-3 space-x-4 bg-transparent carousel carousel-center rounded-box">
        {hourlyUpdate.map((hour, index) => {
          return (
            <CarouselChild key={index} className="shadow-[0_1px_5px_rgb(0,0,0,0.2)] h-[100px] rounded-xl hover:bg-gradient-to-tr hover:from-white hover:to-sky-200 hover:shadow-none transition-all duration-300 flex flex-col p-2 items-center text-black justify-around">
              <img src={hour.condition?.icon} alt="icons" className="w-14" />
              <span className="font-bold font-Kanit">{hour?.temp_c}°C</span>
              <span className="text-sm">{fullTime(hour?.time)}</span>
            </CarouselChild>
          );
        })}
      </div>
    </div>
  );
};
HourlyUpdateCarousel.propTypes = {
  dataForHourly: PropTypes.object,
};

export default HourlyUpdateCarousel;
