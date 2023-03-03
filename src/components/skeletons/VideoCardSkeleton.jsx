import React from "react"
import { CardContent, Typography, Skeleton, Box } from "@mui/material"

const VideoCardSkeleton = () => {
  return (
    <Box sx={{ width: { xs: 1, sm: "358px", md: "320px" } }}>
      <Skeleton variant="rounded" height="250px" sx={{ bgcolor: "grey.800" }} />

      <CardContent sx={{ height: "110px" }}>
        <Typography variant="subtitle1">
          <Skeleton sx={{ bgcolor: "grey.800" }} />
        </Typography>
        <Typography variant="subtitle2">
          <Skeleton sx={{ bgcolor: "grey.800" }} />
        </Typography>
      </CardContent>
    </Box>
  )
}

export default VideoCardSkeleton
