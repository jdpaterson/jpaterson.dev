import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../../components'


const BlogPage = ({ data}) => {
  return (
    <Layout>
      Hello Blog:
      {/* { data.contentfulBlogPost.id} */}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default BlogPage