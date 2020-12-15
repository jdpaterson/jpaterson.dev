import React from 'react'
import { Container } from 'theme-ui'
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

export default function({ children }) {
  return (
    <Container>
      <SEO title={'J. Paterson Dev'} description={'A place for all my thoughts'} />
      <Nav navLinks={links} />
      {children}
    </Container>
  )
}
