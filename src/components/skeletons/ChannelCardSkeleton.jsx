import React from "react"
import { Typography, Card, CardContent, CardMedia, Skeleton, Box } from "@mui/material"

const ChannelCardSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="circular" height="180px" width="180px" sx={{ bgcolor: "grey.800" }} />

      <CardContent>
        <Typography variant="h6">
          <Skeleton sx={{ bgcolor: "grey.800" }} />
        </Typography>
        <Typography>
          <Skeleton sx={{ bgcolor: "grey.800" }} />
        </Typography>
      </CardContent>
    </Box>
  )
}

export default ChannelCardSkeleton
