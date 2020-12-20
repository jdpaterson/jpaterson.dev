import React, { useState } from 'react'
import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  ThemeProvider,
 } from 'theme-ui'
import { funk, bootstrap, tosh, swiss, deep } from '@theme-ui/presets'
import Hero from '../Hero'
import Nav from '../Nav'
import SEO from '../SEO'

export default function({ children, heroImage }) {
  const [theme, setTheme] = useState(swiss)
  const themes = {
    "swiss": swiss,
    "funk": funk,
    "tosh": tosh,
    "bootstrap": bootstrap,
    "deep": deep
  }
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
      theme={theme}
    >
      <Box sx={{ bg: 'background' }}>
        <SEO title={'J. Paterson Dev'} description={'A place for all my thoughts'} />
        <Nav navLinks={links} setTheme={setTheme} themes={themes} />
        <Hero heroImage={heroImage} />
        <Container>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  )
}
