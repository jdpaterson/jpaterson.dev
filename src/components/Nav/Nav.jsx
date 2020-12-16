import React from 'react'
import { Flex, NavLink } from 'theme-ui'

const Nav = ({ navLinks }) => {
  return (
    <Flex
      as="nav"
      sx={{
        backgroundColor: 'background',
        justifyContent: 'space-evenly',
        position: 'sticky',
        top: [0]
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
