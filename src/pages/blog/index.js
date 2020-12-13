import React from 'react'
import { graphql } from 'gatsby'


const BlogPage = ({ data}) => {
  console.log(data)
  return (
    <>
      Hello Blog:
      {/* { data.contentfulBlogPost.id} */}
    </>
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