import React from "react"
import { Stack, Chip } from "@mui/material"
import { categories } from "../utils/constants"

const SideBar = () => {
  return (
    <Stack
      gap={0.5}
      sx={{
        flexDirection: { xs: "row", sm: "column" },
        width: {
          xs: 1,
          sm: "180px",
          md: "220px",
        },
        overflow: 'auto',
        p: "12px",
      }}
    >
      {categories.map((category) => (
        <Chip clickable icon={category.icon} label={category.name} color="error"  />
      ))}
    </Stack>
  )
}

export default SideBar
