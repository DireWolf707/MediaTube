import React from "react"
import { Box, Stack, Typography } from "@mui/material"
import { logo } from "../utils/constants"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      sx={{
        backgroundColor: "#000",
        height: "70px",
        px: "20px",
        py: "40px",
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Box component="img" src={logo} alt="logo" sx={{ height: "50px" }} />
        <Link to="/">
          <Typography color="red" variant="h6">
            MediaTube
          </Typography>
        </Link>
      </Stack>

      <SearchBar />
    </Stack>
  )
}

export default NavBar
