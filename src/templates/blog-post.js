import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from 'theme-ui'
import { Layout } from "../components"

export default function BlogPost({ data }) {
  const  {
    body: { childMarkdownRemark },
    title
  } = data.contentfulBlogPost
  return (
    <Layout>
      <Box>
        <Heading>{title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description
      date
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`