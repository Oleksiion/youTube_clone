import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [serchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!serchTerm) return;

    navigate(`search/${serchTerm}`);
    setSearchTerm("");
    // console.log(`search/${serchTerm}`);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ borderRadius: 20, paddingLeft: 2 }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        type="text"
        value={serchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <IconButton type="submit" sx={{ padding: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
