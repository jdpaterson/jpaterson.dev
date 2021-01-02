import React from 'react'
import { Box } from 'rebass'

const Container = ({ children }) => (
  <Box
    sx={{
      maxWidth: 512,
      mx: 'auto',
      px: 3
    }}>
    { children }
  </Box>
)

export default Container
