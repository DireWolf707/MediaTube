import React from "react"
import SideBar from "../components/SideBar"
import Feed from "../components/Feed"
import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { useSearchVideosQuery } from "../store"

const Home = () => {
  const searchTerm = useSelector((store) => store.data.category)
  const { data, isFetching } = useSearchVideosQuery(searchTerm, { refetchOnMountOrArgChange: true })

  return (
    <Stack
      flexGrow={1}
      gap={2}
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        bgcolor: "#000",
        overflow: "auto",
      }}
    >
      <SideBar />
      <Feed data={data} isFetching={isFetching} searchTerm={searchTerm} />
    </Stack>
  )
}

export default Home
