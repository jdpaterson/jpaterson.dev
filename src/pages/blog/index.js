import React from 'react'
import { graphql } from 'gatsby'
import { Box, Heading, Link, Text } from 'theme-ui'
import { Layout } from '../../components'


const BlogPage = ({ data }) => {
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
  query BlogQuery{
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

export default BlogPage
