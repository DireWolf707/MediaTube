import React from "react"
import { Stack, Chip } from "@mui/material"
import { categories } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"

const SideBar = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((store) => store.data.searchTerm)

  return (
    <Stack
      flexShrink={0}
      gap={0.5}
      sx={{
        flexDirection: { xs: "row", sm: "column" },
        width: {
          xs: 1,
          sm: "180px",
          md: "220px",
        },
        overflow: "auto",
        p: "12px",
      }}
    >
      {categories.map((category, idx) => {
        const isSelected = category.name == searchTerm
        return (
          <Chip
            key={idx}
            clickable={!isSelected}
            onClick={() => dispatch(changeSearchTerm(category.name))}
            icon={category.icon}
            label={category.name}
            color={isSelected ? "selected" : "notSelected"}
            sx={{ flexShrink: 0 }}
          />
        )
      })}
    </Stack>
  )
}

export default SideBar
