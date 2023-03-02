import React from "react"
import { Box, Typography, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { useSearchVideosQuery } from "../store"
import VideoCard from "./VideoCard"
import { useParams } from "react-router-dom"

const Feed = () => {
  const { searchTerm } = useParams()
  const category = useSelector((store) => store.data.category)
  const search = searchTerm ? searchTerm : category
  const { data, isFetching } = useSearchVideosQuery(search, { refetchOnMountOrArgChange: true })

  return (
    <Stack
      flexGrow={1}
      sx={{
        px: { xs: "26px", sm: "16px" },
        pb: "13px",
        overflow: "hidden",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white", p: 2 }}>
        {search}&nbsp;
        <Box component="span" sx={{ color: "red" }}>
          Videos
        </Box>
      </Typography>

      <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2} sx={{ overflow: "auto" }}>
        {data && data.items.map((video) => video.id.videoId && <VideoCard key={video.id.videoId} video={video} />)}
      </Stack>
    </Stack>
  )
}

export default Feed
