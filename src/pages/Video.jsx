import React from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Stack, useMediaQuery } from "@mui/material"
import Feed from "../components/Feed"
import { useSuggestedVideosQuery, useDetailVideoQuery } from "../store"

const Video = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.between("xs", "md"))
  const { videoId } = useParams()
  const { data: videoData, isFetching: isVideoDataFetching } = useDetailVideoQuery(videoId, { refetchOnMountOrArgChange: true })
  const { data, isFetching } = useSuggestedVideosQuery(videoId, { refetchOnMountOrArgChange: true })

  if (isVideoDataFetching) return <></>

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoData.items[0]

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
      </Stack>

      <Feed data={data} isFetching={isFetching} searchTerm="Suggested" feedOverflow={!isSmall} />
    </Stack>
  )
}

export default Video
