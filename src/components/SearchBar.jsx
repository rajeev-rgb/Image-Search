/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-input">
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
};

export default SearchBar;
