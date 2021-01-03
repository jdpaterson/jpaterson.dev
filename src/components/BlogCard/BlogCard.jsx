import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text
} from 'rebass'

const BlogCard = ({ blog }) => {
  return (
    <Box m={[15]} data-test-id={`BlogCard-${blog.slug}`}>
      <Link key={blog.slug} href={`/blog/${blog.slug}`} >
        <Flex flexDirection={['column', 'row']}>
          <Box
            sx={{
              minHeight: [250],
              minWidth: [250]
            }}
          >
            <Image src={blog.thumbnail.fixed.src} />
          </Box>
          <Box
            p={[15]}
          >
            <Box>
              <Heading as="h2">{ blog.title }</Heading>
            </Box>
            <Box>
              <Text>{ blog.description }</Text>
            </Box>
          </Box>
        </Flex>
      </Link>
    </Box>
  )
}

export default BlogCard