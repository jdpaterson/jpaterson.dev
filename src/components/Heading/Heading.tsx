import React from 'react'
import { Heading as RebassHeading } from 'rebass'

const Heading = ({ as = 'h1', children, ...props}) => (
  <RebassHeading as={as} variant={as} { ...props }>{children}</RebassHeading>
)

export default Heading
