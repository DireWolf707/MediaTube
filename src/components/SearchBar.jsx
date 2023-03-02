import React, { useRef } from "react"
import SearchIcon from "@mui/icons-material/Search"
import { Box, Paper, IconButton } from "@mui/material"
import { useDispatch } from "react-redux"
import { changeSearchTerm } from "../store"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inpRef = useRef(null)
  const searchHandler = (e) => {
    e.preventDefault()
    const searchTerm = inpRef.current.value
    if (searchTerm.length == 0) return
    dispatch(changeSearchTerm(searchTerm))
    navigate(`/search/${searchTerm}`)
    inpRef.current.value = ""
  }

  return (
    <Paper
      component="form"
      onSubmit={searchHandler}
      sx={{
        display: "flex",
        // flexShrink: 1,
        width: { sm: "300px", md: "400px" },
        p: "2px",
        borderRadius: "26px",
      }}
    >
      <Box
        ref={inpRef}
        component="input"
        sx={{
          flexGrow: 1,
          width: 1 / 5,
          ml: "16px",
          mr: "12px",
          color: "#ba000d",
        }}
      />
      <IconButton type="submit" sx={{ border: 3, borderColor: "#ba000d", color: "#ba000d" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
