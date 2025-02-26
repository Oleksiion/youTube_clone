import { Stack } from "@mui/material";
import React, { useState } from "react";
import { categories } from "../utils/constants";

// const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
//   return (
//     <Stack
//       sx={{
//         flexDirection: {
//           md: "column",
//         },
//         height: {
//           sx: "auto",
//           md: "95%",
//         },
//         overflowY: "auto",
//       }}
//     >
//       {categories.map((item) => (
//         <button
//           onClick={() => {
//             setSelectedCategory(item.name);
//           }}
//           style={{
//             background: item.name === selectedCategory && "#FC1503",
//             color: "white",
//           }}
//           key={item.name}
//           className="category-btn"
//         >
//           <span
//             style={{
//               marginRight: "10px",
//               color: item.name === selectedCategory ? "white" : "red",
//               opacity: item.name === selectedCategory ? 1 : 0.6,
//             }}
//           >
//             {item.icon}
//           </span>
//           <span
//             style={{
//               opacity: item.name === selectedCategory ? 1 : 0.6,
//             }}
//           >
//             {item.name}
//           </span>
//         </button>
//       ))}
//     </Stack>
//   );
// };

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    // direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column", xs: "row" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);
export default Categories;
