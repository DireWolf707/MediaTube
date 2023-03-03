import React from "react"
import { Skeleton, Box, Stack, Typography } from "@mui/material"

const PlayerSkeleton = () => {
  return (
    <>
      <Box width="100%" height="100%" sx={{ p: "24px" }}>
        <Skeleton variant="rounded" sx={{ bgcolor: "grey.800" }} width="100%" height="100%" />
      </Box>

      <Typography variant="h5" p={2}>
        <Skeleton sx={{ bgcolor: "grey.800" }} />
      </Typography>

      <Stack direction="row" justifyContent="space-between" py={1} px={2}>
        <Typography variant="h6">
          <Skeleton sx={{ bgcolor: "grey.800" }} width="100px" />
        </Typography>

        <Stack direction="row" gap="20px" alignItems="center">
          <Typography variant="body1">
            <Skeleton sx={{ bgcolor: "grey.800" }} width="80px" />
          </Typography>

          <Typography variant="body1">
            <Skeleton sx={{ bgcolor: "grey.800" }} width="80px" />
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default PlayerSkeleton
