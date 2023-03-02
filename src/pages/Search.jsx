import React from "react"
import Feed from "../components/Feed"
import { Stack } from "@mui/material"

const Home = () => {
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
      <Feed />
    </Stack>
  )
}

export default Home
