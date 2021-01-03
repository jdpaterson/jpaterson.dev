import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  Box,
} from 'rebass'
import { Heading, Layout } from "../components"

export default function BlogPost({ data }) {
  const  {
    body: { childMdx },
    featuredImage,
    title
  } = data.contentfulBlogPost
  return (
    <Layout heroImage={featuredImage.fixed}>
      <Box>
        <Heading
          as="h1"
          textAlign="center"
        >{title}</Heading>
        <MDXRenderer>{childMdx.body}</MDXRenderer>
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
        childMdx {
          body
        }
      }
      featuredImage {
        fixed(
          width: 1200
          resizingBehavior: PAD
        ) {
          src
        }
      }
    }
  }
`