import React from 'react'
import { Flex, NavLink } from 'theme-ui'

const Nav = ({ navLinks }) => {
  return (
    <Flex
      as="nav"
      sx={{
        justifyContent: 'space-evenly'
      }}
    >
      {
        navLinks.map(({ label, linkTo }) => (
          <NavLink key={label} href={linkTo}>
            { label }
          </NavLink>
        ))
      }
    </Flex>
  )
}

export default Nav
