import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import search from "../../assets/icon-search.svg";
import { SearcProps , Selector} from "../../interfaces/interfaces";
import "./SearchBar.scss";

export const SearchBar = ({ setSearch, isError }: SearcProps) => {
  const [localSatate, setlocalSatate] = useState("");
  const inputRef = useRef<any>();
  const { light } = useSelector((state: Selector) => state.theme);
  const handleSearch = () => {
    setSearch(localSatate);
    inputRef.current = "";
  };
  return (
    <div className={`search__container ${light ? "light" : "dark"}`}>
      <img src={search} alt="search" className="search__container-img" />
      <input
        onChange={(e) => setlocalSatate(e.target.value)}
        type="text"
        className={`search__container-input ${light ? "light" : "dark"}`}
        placeholder="Search GitHub username…"
        ref={inputRef}
      />
      {isError && <span className="searc__container-error">No Results</span>}

      <button
        className="search__container-button"
        onClick={() => handleSearch()}
      >
        Search
      </button>
    </div>
  );
};
