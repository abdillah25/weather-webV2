import PropTypes from "prop-types";

const MainInfo = (props) => {
  // Menggunakan `props` sebagai argumen
  const { className1, className2, className3, degreeCurrent, condition, timeDate } = props; // Mengambil nilai `className` dari `props`
  return (
    <div className="flex flex-col text-black">
      <span className={` ${className1}`}>{degreeCurrent}°C</span>
      <span className={` ${className2} flex items-center`}>
        <span className="mr-2 text-base material-symbols-outlined">weather_mix</span> {condition}
      </span>
      <span className={` ${className3} flex items-center`}>
        <span className="mr-2 text-base material-symbols-outlined">today</span>
        {timeDate}
      </span>
    </div>
  );
};
MainInfo.propTypes = {
  className1: PropTypes.string,
  className2: PropTypes.string,
  className3: PropTypes.string,
  degreeCurrent: PropTypes.number,
  condition: PropTypes.string,
  timeDate: PropTypes.string,
};

const LocationInfo = (props) => {
  const { iconSize, textSize, cityName, regionName, countryName } = props;
  return (
    <div className="flex items-center gap-1 mt-10">
      <span className={`${iconSize} material-symbols-outlined`}>location_on</span>
      <div className={textSize}>
        <span className={`font-Oswald`}>{cityName}</span>, <span>{regionName}</span>, <span>{countryName}</span>.
      </div>
    </div>
  );
};
LocationInfo.propTypes = {
  iconSize: PropTypes.string,
  textSize: PropTypes.string,
  cityName: PropTypes.string,
  regionName: PropTypes.string,
  countryName: PropTypes.string,
};

const SecondInfo = (props) => {
  const { icon, description, infoDes } = props;
  return (
    <div className="flex items-center">
      <div>
        <span className="pr-2 text-2xl md:text-2xl material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <div className="text-[13px] font-medium sm:text-md md:text-base">{description}</div>
        <div className="font-bold text-[11px] font-Oswald md:text-base">{infoDes}</div>
      </div>
    </div>
  );
};

SecondInfo.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
  infoDes: PropTypes.any,
};

const MainImage = (props) => {
  const { image } = props;
  return (
    <div className="absolute right-0 top-5">
      <img src={image} alt="icons" className="w-[100px]  sm:w-[120px] md:w-[130px]" />
    </div>
  );
};
MainImage.propTypes = {
  image: PropTypes.string,
};

export { MainInfo, LocationInfo, SecondInfo, MainImage };
