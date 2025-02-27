import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
      // console.log(data);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (videosData) => {
        setVideos(videosData?.items);
        // console.log(videosData);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
      </Box>

      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

//  useEffect(() => {
//   const fetchResults = async () => {
//     const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
//     console.log(data);
//     setChannelDetail(data?.items[0]);
//   };

//   fetchResults();
// }, [id]);
