import React from "react"
import SideBar from "../components/SideBar"
import Feed from "../components/Feed"
import { Stack } from "@mui/material"

const Home = () => {
  return (
    <Stack
      flexGrow={1}
      gap={2}
      sx={{
        height: "90vh",
        flexDirection: { xs: "column", sm: "row" },
        bgcolor: "#000",
        borderTop: "4px solid red",
      }}
    >
      <SideBar />
      <Feed />
    </Stack>
  )
}

export default Home
