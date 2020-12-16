import React from 'react'
import { Box, Image } from 'theme-ui'

const Hero = ({ heroImage }) => {
  return (
    <Box>
      <Image
        {...heroImage}
        width={['100%']}
      />
    </Box>
  )
}

export default Hero