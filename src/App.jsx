import React from "react"
import { Routes, Route } from "react-router-dom"
import { Stack } from "@mui/material"
import { Home, Channel, Video, Search } from "./pages"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <Stack sx={{ height: "100vh", width: "100vw", bgcolor: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<Search />} />
        <Route path="/channel/:channelId" element={<Channel />} />
        <Route path="/video/:videoId" element={<Video />} />
      </Routes>
    </Stack>
  )
}

export default App
