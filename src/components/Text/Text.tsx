import React from 'react'
import { Text as RebassText } from 'rebass'

const Heading = ({ as = 'p', children, ...props}) => (
  <RebassText as={as} variant={as} { ...props }>{children}</RebassText>
)

export default Heading
