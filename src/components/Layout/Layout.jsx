import React from 'react'
import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  Text,
 } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import Hero from '../Hero'
import Nav from '../Nav'
import SEO from '../SEO'

// data
const links = [
  {
    label: "Home",
    linkTo: "/"
  },
  {
    label: "Blog",
    linkTo: "/blog",
  },
]

export default function({ children, heroImage }) {
  return (
    <Box>
      <SEO title={'J. Paterson Dev'} description={'A place for all my thoughts'} />
      <Nav navLinks={links} />
      <Hero heroImage={heroImage} />
      <Container>
        <MDXProvider
          components={{
            p: Text,
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
        >
          {children}
        </MDXProvider>
      </Container>
    </Box>
  )
}
