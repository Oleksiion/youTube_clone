import React from "react";
import { Stack, Box } from "@mui/material";

// import { ChannelCard, Loader, VideoCard } from "../components";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
