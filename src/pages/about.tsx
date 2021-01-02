import * as React from "react"
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Heading, Image, Text } from 'rebass'
import { BlogCard, Layout } from '../components'

// markup
const IndexPage = ({ data }) => {
  console.log(data)
  const { contentfulPage: { body, heroImage }} = data
  return (
    <Layout>
      <Heading as="h1">About</Heading>
      <Image height={200} width={150} src={heroImage.fluid.src} />
      <MDXRenderer>
        { body.childMdx.body }
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
    contentfulPage(slug: { eq: "about" }){
      body {
        childMdx{
          body
        }
      }
      heroImage {
        fluid {
          src
        }
      }
    }
  }
`

export default IndexPage
