import * as React from "react"
import { graphql } from 'gatsby'
import { Button } from 'rebass'
import Layout from '../components/Layout'

// data
const links = [
  {
    text: "Blog",
    url: "/blog",
  },
]

// markup
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
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
