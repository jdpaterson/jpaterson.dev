import React from 'react'
import { Container } from 'theme-ui'
import Nav from '../Nav'

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
      <Nav navLinks={links} />
      {children}
    </Container>
  )
}
