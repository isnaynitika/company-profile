// components/SearchComponent.js
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setSearchActive(true);
  };

  useEffect(() => {
    if (query == "") {
      setSearchActive(false);
      onSearch(query);
    } else {
      setSearchActive(true);
    }
  }, [query, searchActive]);

  return (
    <div className="w-full lg:max-w-md">
      <form className="flex items-center" onSubmit={handleSearch}>
        <input
          className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500  focus:placeholder-gray-400 focus:outline-none  sm:text-sm"
          placeholder="Pencarian"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className=" flex ms-3 w-1/4 sm:w-auto items-center justify-center rounded-md  bg-white px-4 py-2 font-medium text-gray-500 shadow-sm  sm:mt-0 sm:ml-3  sm:text-sm"
        >
          <p className="block md:hidden">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-lg text-bold " />
          </p>

          <p className="hidden md:block">Search</p>
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
