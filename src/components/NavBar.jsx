import React from "react"
import { Box, Stack, Typography } from "@mui/material"
import { logo } from "../utils/constants"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import { useDispatch } from "react-redux"
import { resetCategory } from "../store"

const NavBar = () => {
  const dispatch = useDispatch()

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      flexShrink={0}
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
        <Link to="/" onClick={() => dispatch(resetCategory())}>
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
