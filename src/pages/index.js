import * as React from "react"
import { graphql } from 'gatsby'
import { Box, Heading, Link, Text } from 'theme-ui'
import Layout from '../components/Layout'

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Heading>J. Paterson .dev</Heading>
      {
        data.allContentfulBlogPost.nodes.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} >
            <Box>
              <Heading as="h2">{ blog.title }</Heading>
              <Text>{ blog.description }</Text>
            </Box>
          </Link>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost {
      nodes {
        slug
        title
        description
        date
      }
    }
  }
`

export default IndexPage
