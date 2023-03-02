import React from "react"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"

const ChannelCard = ({ channelDetail }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        image={channelDetail?.snippet?.thumbnails?.high?.url}
        alt={channelDetail?.snippet?.title}
        sx={{ borderRadius: "100%", height: "180px", width: "180px" }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" }}>
        <Typography variant="h6">{channelDetail?.snippet?.title}</Typography>
        <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString("en-US")} Subscribers
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ChannelCard
