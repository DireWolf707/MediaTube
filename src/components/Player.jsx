import React from "react"
import ReactPlayer from "react-player"
import { Link } from "react-router-dom"
import { Typography, Stack } from "@mui/material"

const Player = ({
  videoId,
  videoData: {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  },
}) => {
  return (
    <>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls width="100%" height="100%" style={{ padding: "24px" }} />
      <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
        {title}
      </Typography>

      <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
        <Link to={`/channel/${channelId}`}>
          <Typography variant="h6" color="#fff">
            {channelTitle}
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
    </>
  )
}

export default Player
