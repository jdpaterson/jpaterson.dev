import React from 'react'
import {
  Box,
  Heading,
  Image,
  Link,
  Text,
} from 'rebass'
import {
  Divider,
  ThemeProvider
} from 'theme-ui'
import defaultTheme from '../../gatsby-plugin-theme-ui/index'
import Container from '../Container'
import Hero from '../Hero'
import Nav from '../Nav'
import SEO from '../SEO'

export default function({ children, heroImage }) {
  const links = [
    {
      label: "Home",
      linkTo: "/"
    },
    {
      label: "About",
      linkTo: "/about",
    },
  ]
  return (
    <ThemeProvider
      components={{
        p: props => <Text {...props} as="p" />,
        h1: props => <Heading {...props} as="h1" />,
        h2: props => <Heading {...props} as="h2" />,
        h3: props => <Heading {...props} as="h3" />,
        h4: props => <Heading {...props} as="h4" />,
        h5: props => <Heading {...props} as="h5" />,
        h6: props => <Heading {...props} as="h6" />,
        hr: Divider,
        a: props => <Link {...props} target="_blank" />,
        img: Image
      }}
      theme={defaultTheme}
    >
      <Box sx={{ bg: 'background' }}>
        <SEO title={'J. Paterson Dev'} description={'A place for all my thoughts'} />
        <Container>
        <Nav navLinks={links} />
        { heroImage && (<Hero heroImage={heroImage} />)}
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  )
}
