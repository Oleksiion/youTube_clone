import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// перепутал линк компонент мюа и реакт роутера , изза чего ссылка не работала

// const VideoDetail = () => {
//   //  детали для мейн видео
//   const [videoDetail, setVideoDetail] = useState(null);
//   // видео для сайдбара
//   const [videos, setVideos] = useState(null);

//   const { id } = useParams();

//   useEffect(() => {
//     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
//       setVideoDetail(data.items[0])
//     );

//     fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
//       (data) => setVideos(data.items)
//     );
//   }, [id]);

//   return (
//     // <Box minHeight="95vh">
//     //   <Stack direction="row">
//     //     <Box
//     //       flex={1}
//     //       sx={{
//     //         color: "white",
//     //       }}
//     //     >
//     //       <Box>
//     //         <ReactPlayer
//     //           url={`https://www.youtube.com/watch?v=${id}`}
//     //           className="react-player"
//     //           controls
//     //         />
//     //         <Typography></Typography>
//     //       </Box>
//     //     </Box>

//     //     <Box
//     //       px={2}
//     //       py={{ md: 1, xs: 5 }}
//     //       justifyContent="center"
//     //       alignItems="center"
//     //     >
//     //       <Videos videos={videos} direction="column" />
//     //     </Box>
//     //   </Stack>
//     // </Box>

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.items?.[0] || null)
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items || [])
    );
  }, [id]);

  // Проверяем, есть ли данные, прежде чем их использовать
  if (!videoDetail) return <Typography color="#fff">Загрузка...</Typography>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  // console.log(title);
  // console.log(channelId);
  // console.log(channelTitle);
  // console.log(viewCount);
  // console.log(likeCount);
  console.log("channelId:", channelId);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link
                sx={{
                  cursor: "pointer",
                }}
                to={`/channel/${channelId}`}
              >
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};
export default VideoDetail;
