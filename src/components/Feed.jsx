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
    <Stack
      flexGrow={1}
      sx={{
        px: { xs: "26px", sm: "16px" },
        pb: "13px",
        overflow: "hidden",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white", p: 2 }}>
        {category}&nbsp;
        <Box component="span" sx={{ color: "red" }}>
          Videos
        </Box>
      </Typography>

      <Stack flexGrow={1} direction="row" justifyContent="center" flexWrap="wrap" gap={2} sx={{ overflow: "auto" }}>
        {data && data.items.map((video) => <VideoCard video={video} />)}
      </Stack>
    </Stack>
  )
}

export default Feed
