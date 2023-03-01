import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import { Box, Paper, IconButton } from "@mui/material"

const SearchBar = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        // flexShrink: 1,
        width: { sm: "300px", md: "400px" },
        p: "2px",
        borderRadius: "26px",
      }}
    >
      <Box
        component="input"
        sx={{
          flexGrow: 1,
          width: 1 / 5,
          ml: "16px",
          mr: "12px",
          color: "#ba000d",
        }}
      />
      <IconButton sx={{ border: 3, borderColor: "#ba000d", color: "#ba000d" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
