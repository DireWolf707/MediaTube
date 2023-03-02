import React from "react"
import { useParams } from "react-router-dom"
import { Stack, Box } from "@mui/material"
import Feed from "../components/Feed"
import { useDetailChannelQuery, useChannelVideosQuery } from "../store"
import ChannelCard from "../components/ChannelCard"

const Channel = () => {
  const { channelId } = useParams()
  const { data: channelData, isFetching: isChannelDataFetching } = useDetailChannelQuery(channelId, { refetchOnMountOrArgChange: true })
  const { data, isFetching } = useChannelVideosQuery(channelId, { refetchOnMountOrArgChange: true })

  if (isChannelDataFetching) return <></>

  return (
    <Stack flexGrow={1} sx={{ overflow: "auto" }}>
      <Box
        flexShrink={0}
        sx={{
          height: "200px",
          background: "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
        }}
      />
      <Stack flexShrink={0} justifyContent="center" alignItems="center" marginTop="-93px">
        <ChannelCard channelDetail={channelData.items[0]} />
      </Stack>
      <Feed data={data} isFetching={isFetching} searchTerm={channelData.items[0].snippet?.title} feedOverflow={false} />
    </Stack>
  )
}

export default Channel
