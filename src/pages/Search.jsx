import React from "react"
import Feed from "../components/Feed"
import { Stack } from "@mui/material"
import { useSearchVideosQuery } from "../store"
import { useParams } from "react-router-dom"

const Home = () => {
  const { searchTerm } = useParams()
  const { data, isFetching } = useSearchVideosQuery(searchTerm, { refetchOnMountOrArgChange: true })

  return (
    <Stack
      flexGrow={1}
      gap={2}
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        bgcolor: "#000",
        borderTop: "4px solid red",
        overflow: "hidden",
      }}
    >
      <Feed data={data} isFetching={isFetching} searchTerm={searchTerm} />
    </Stack>
  )
}

export default Home
