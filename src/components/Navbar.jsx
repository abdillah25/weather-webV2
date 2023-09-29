import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleIsSidebarOpen = () => {
    isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
  };

  return (
    <div className={`fixed top-0 z-10  flex justify-between text-black bg-transparent bg-white shadow-md  md:justify-around navbar`}>
      <div className="flex w-[30%] items-center">
        <a className="text-xl capitalize btn btn-ghost hover:bg-black hover:text-white font-Kanit" onClick={() => scroll.scrollToTop()}>
          Weather App
        </a>
      </div>

      {/* list items navbar desktop */}
      <ul className="w-[80%] justify-around hidden md:flex capitalize font-Oswald ">
        <li className="px-3 py-1 transition-all rounded-lg duration-400 hover:bg-black hover:text-white">
          <ScrollLink to="main-card-section" smooth={true} duration={500} offset={-60}>
            current info
          </ScrollLink>
        </li>
        <li className="px-3 py-1 transition-all rounded-lg duration-400 hover:bg-black hover:text-white">
          <ScrollLink to="chart-card-section" smooth={true} duration={500} offset={-60}>
            Average Daily Temp
          </ScrollLink>
        </li>
        <li className="px-3 py-1 transition-all rounded-lg duration-400 hover:bg-black hover:text-white">
          <ScrollLink to="hourly-carousel-section" smooth={true} duration={500} offset={-60}>
            Hourly Update
          </ScrollLink>
        </li>
        <li className="px-3 py-1 transition-all rounded-lg duration-400 hover:bg-black hover:text-white">
          <ScrollLink to="day-forecast-section" smooth={true} duration={500} offset={-60}>
            Day Forecast
          </ScrollLink>
        </li>
      </ul>

      {/* list items navbar android */}
      <ul className={` ${isSidebarOpen ? "-translate-x-full" : "translate-x-0"} transition-all duration-500 w-[40%] justify-around  items-center flex flex-col rounded-br-md absolute top-0 mt-16 left-0 h-[300px]  capitalize bg-white shadow-md font-Oswald`}>
        <li className="px-3 py-1 transition-all rounded-lg duration-400 hover:bg-black hover:text-white">
          <ScrollLink to="main-card-section" smooth={true} duration={500} offset={-60}>
            current info
          </ScrollLink>
        </li>
        <li className="px-3 py-1 transition-all rounded-lg duration-400 hover:bg-black hover:text-white">
          <ScrollLink to="chart-card-section" smooth={true} duration={500} offset={-60}>
            Average Daily Temp
          </ScrollLink>
        </li>
        <li className="px-3 py-1 transition-all rounded-lg duration-400 hover:bg-black hover:text-white">
          <ScrollLink to="hourly-carousel-section" smooth={true} duration={500} offset={-60}>
            Hourly Update
          </ScrollLink>
        </li>
        <li className="px-3 py-1 transition-all rounded-lg duration-400 hover:bg-black hover:text-white">
          <ScrollLink to="day-forecast-section" smooth={true} duration={500} offset={-60}>
            Day Forecast
          </ScrollLink>
        </li>
      </ul>

      <label className="text-black bg-transparent border-none rounded-md btn btn-circle swap swap-rotate hover:text-white md:hidden hover:bg-black">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onClick={handleIsSidebarOpen} />

        {/* hamburger icon */}
        <svg className="fill-current swap-off" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg className="fill-current swap-on" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
