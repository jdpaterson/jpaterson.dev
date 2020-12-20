import React from 'react'
import { Box, Image } from 'theme-ui'

const Hero = ({ heroImage }) => {
  return (
    <Box sx={{ height: ['100px']}} >
      <Image
        {...heroImage}
        sx={{
          height: ['100px'],
          width: ['100%']
        }}
      />
    </Box>
  )
}

export default Hero