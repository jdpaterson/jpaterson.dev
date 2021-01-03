import React from 'react'
import { Box, Image } from 'theme-ui'

const Hero = ({ heroImage }) => {
  return (
    <Box>
      <Image
        {...heroImage}
      />
    </Box>
  )
}

export default Hero