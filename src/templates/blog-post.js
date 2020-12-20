import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  ThemeProvider,
 } from 'theme-ui'
import { Layout } from "../components"

export default function BlogPost({ data }) {
  const  {
    body: { childMdx },
    featuredImage,
    title
  } = data.contentfulBlogPost
  return (
    <Layout heroImage={featuredImage.fluid}>
      <Box>
        <Heading>{title}</Heading>
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
          height: 200
          resizingBehavior: CROP
        ) {
          src
        }
      }
    }
  }
`