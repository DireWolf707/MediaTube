import React from "react"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ borderRadius: 0, width: { xs: 1, sm: "358px", md: "320px" } }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia component="img" image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{height: "250px"}} />
      </Link>
      <CardContent sx={{ bgcolor: "#1E1E1E", height: '110px' }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" color="gray">{snippet?.channelTitle}</Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
