import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState("New");
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
//       setVideos(data.items)
//     );
//   }, [selectedCategory]);

//   return (
//     <Stack
//       sx={{
//         flexDirection: {
//           sx: "column",
//           md: "row",
//         },
//       }}
//     >
//       <Box
//         sx={{
//           borderRight: "1px solid red",
//           minHeight: {
//             sx: "auto",
//             md: "92vh",
//           },
//           px: {
//             sx: 0,
//             md: 4,
//           },
//           minWidth: {
//             sx: "auto",
//             md: "200px",
//           },
//           color: "#fff",
//         }}
//       >
//         <Sidebar
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />
//         <Typography>Some text</Typography>
//       </Box>

//       <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           mb={2}
//           sx={{ color: "white" }}
//         >
//           {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
//         </Typography>

//         <Videos videos={videos} />
//       </Box>
//     </Stack>
//   );
// };
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState();

  useEffect(() => {
    console.log("Текущая категория:", selectedCategory);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  //ЭТО РАБОТАЕТ
  // useEffect(() => {
  //   fetchFromAPI(
  //     `search?part=snippet&q=${selectedCategory}&maxResults=50`
  //   ).then((data) => {
  //     console.log(data.items);
  //     setVideos(data.items);
  //   });
  // }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
