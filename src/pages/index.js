import * as React from "react"
import { graphql } from 'gatsby'
import { Heading } from 'rebass'
import { BlogCard, Layout } from '../components'

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Heading as="h1">Blog Posts</Heading>
      {
        data.allContentfulBlogPost.nodes.map((blog) => {
          return (
            <BlogCard key={blog.slug} blog={blog} />
          )
        })
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
        thumbnail {
          fixed{
            src
          }
        }
      }
    }
    contentfulPage(slug: { eq: "home" }){
      heroImage{
        fluid {
          src
        }
      }
    }
  }
`

export default IndexPage
