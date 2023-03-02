import React from "react"
import { Box, Typography, Stack } from "@mui/material"

import VideoCard from "./VideoCard"

const Feed = ({ data, isFetching, searchTerm, feedOverflow = true }) => {
  return (
    <Stack
      flexGrow={1}
      sx={{
        px: { xs: "26px", sm: "16px" },
        pb: "13px",
        overflow: feedOverflow ? "auto" : "visible",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white", p: 2 }}>
        {searchTerm}&nbsp;
        <Box component="span" sx={{ color: "red" }}>
          Videos
        </Box>
      </Typography>

      <Stack flexDirection="row" justifyContent="center" flexWrap="wrap" gap={2} sx={{ overflow: feedOverflow ? "auto" : "visible" }}>
        {!isFetching && data.items.map((video) => video.id.videoId && <VideoCard key={video.id.videoId} video={video} />)}
      </Stack>
    </Stack>
  )
}

export default Feed
