import React from "react"
import { useParams } from "react-router-dom"
import { Stack, useMediaQuery } from "@mui/material"
import Feed from "../components/Feed"
import { useSuggestedVideosQuery, useDetailVideoQuery } from "../store"
import Player from "../components/Player"
import PlayerSkeleton from "../components/skeletons/PlayerSkeleton"

const Video = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.between("xs", "md"))
  const { videoId } = useParams()
  const {
    data: videoData,
    isFetching: isVideoDataFetching,
    isError: isVideoDataError,
  } = useDetailVideoQuery(videoId, { refetchOnMountOrArgChange: true })
  const { data, isFetching, isError } = useSuggestedVideosQuery(videoId, { refetchOnMountOrArgChange: true })

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
        {isVideoDataFetching || isVideoDataError || videoData.error ? (
          <PlayerSkeleton />
        ) : (
          <Player videoData={videoData.items[0]} videoId={videoId} />
        )}
      </Stack>

      <Feed data={data} isFetching={isFetching || isError} searchTerm="Suggested" feedOverflow={!isSmall} />
    </Stack>
  )
}

export default Video
