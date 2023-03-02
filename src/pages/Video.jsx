import React from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Stack } from "@mui/material"
import { useDetailVideoQuery } from "../store"
import Feed from "../components/Feed"
import { useMediaQuery } from "@mui/material"

const Video = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.between("xs", "md"))
  const { videoId } = useParams()
  const { data, isFetching } = useDetailVideoQuery(videoId, { refetchOnMountOrArgChange: true })

  if (isFetching) return <></>

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = data.items[0]

  return (
    <Stack flexGrow={1} sx={{ flexDirection: { sm: "column", md: "row" }, overflow: "auto" }}>
      <Stack
        flexDirection="column"
        flexGrow={1}
        flexShrink={0}
        sx={{
          width: {
            sm: "100%",
            md: "60%",
          },
          height: "90%",
        }}
      >
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls width="100%" height="100%" style={{ padding: "24px" }} />

        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
          {title}
        </Typography>

        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
          <Link to={`/channel/${channelId}`}>
            <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
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
      </Stack>
      <Feed feedOverflow={!isSmall} />
    </Stack>
  )
}

export default Video
