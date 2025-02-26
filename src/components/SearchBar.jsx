import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{ borderRadius: 20, paddingLeft: 2 }}
  >
    <input
      className="search-bar"
      placeholder="Search..."
      type="text"
      value=""
      onChange={() => {}}
    />

    <IconButton type="submit" sx={{ padding: "10px", color: "red" }}>
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchBar;
