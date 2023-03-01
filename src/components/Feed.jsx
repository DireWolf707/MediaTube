import React from "react"
import { Box, Typography, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { useSearchVideosQuery } from "../store"
import VideoCard from "./VideoCard"

const Feed = () => {
  const { category } = useSelector((store) => store.data)
  const { data, isFetching } = useSearchVideosQuery(category, { refetchOnMountOrArgChange: true })
  console.log(data)

  return (
    <Box sx={{ height: "90vh", overflow: "auto", p: { xs: "26px", sm: "16px" } }}>
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
        {category}&nbsp;
        <Box component="span" sx={{ color: "red" }}>
          Videos
        </Box>
      </Typography>

      <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>
        {data && data.items.map((video) => <VideoCard video={video} />)}
      </Stack>
    </Box>
  )
}

export default Feed
