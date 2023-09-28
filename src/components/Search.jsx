import { useState } from "react";
import PropTypes from "prop-types";

const SearchComponent = ({ onDataReceived }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Mengirim data ke komponen utama (App.jsx) melalui callback
    onDataReceived(searchTerm);
  };
  return (
    <div className="my-5 border bg-white  form-control md:w-[70%] w-[90%] lg:w-[50%] rounded-full overflow-hidden mx-auto mt-24">
      <div className="input-group">
        <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search…" className="w-full bg-white input focus:outline-none focus:shadow-[0_1px_20px_rgb(0,0,0,0.12)] transition-all duration-300" />
        <button className="bg-transparent border-none btn btn-square" onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
SearchComponent.propTypes = {
  onDataReceived: PropTypes.func.isRequired, // Prop onDataReceived harus berupa fungsi yang wajib ada
};

export default SearchComponent;
