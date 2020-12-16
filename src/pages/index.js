import * as React from "react"
import { graphql } from 'gatsby'
import { Box, Flex, Heading, Image, Link, Text } from 'theme-ui'
import Layout from '../components/Layout'

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout heroImage={data.contentfulPage.heroImage.fluid}>
      <Heading>J. Paterson .dev</Heading>
      {
        data.allContentfulBlogPost.nodes.map((blog) => {
          return (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} >
            <Flex>
              <Box
                sx={{
                  minHeight: [250],
                  minWidth: [250]
                }}
              >
                <Image src={blog.thumbnail.fixed.src} />
              </Box>
              <Box>
                <Heading as="h2">{ blog.title }</Heading>
                <Text>{ blog.description }</Text>
              </Box>
            </Flex>
          </Link>
        )})
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
