import * as React from "react"
import { graphql } from 'gatsby'
import { Button, Heading } from 'theme-ui'
import Layout from '../components/Layout'

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Heading>J. Paterson .dev</Heading>
      <Button>Beep</Button>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery{
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage
