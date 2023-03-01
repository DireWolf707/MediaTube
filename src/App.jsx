import React from "react"
import { Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { Home, Channel, Video, Search } from "./pages"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchTerm" element={<Search />} />
        <Route path="/channel/:channelId" element={<Channel />} />
        <Route path="/video/:videoId" element={<Video />} />
      </Routes>
    </Box>
  )
}

export default App
