import React from 'react'
import { Flex, NavLink, Select } from 'theme-ui'

const Nav = ({ navLinks, setTheme, themes }) => {
  return (
    <Flex justifyContent="space-between">
      <Flex
        as="nav"
        sx={{
          flex: [1],
          justifyContent: 'space-evenly',
          padding: ['15px'],
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
        <Select onChange={(e) => {
          setTheme(themes[e.target.value])
        }}>
          {
            Object.keys(themes).map((theme) => (
              <option>{theme}</option>
            ))
          }
        </Select>
      </Flex>
    </Flex>
  )
}

export default Nav
