exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
          title
          description
          date
        }
      }
    }
  `)
  data.allContentfulBlogPost.nodes.forEach(node => {
    const slug = node.slug
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    })
  })
}