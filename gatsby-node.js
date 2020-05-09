/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const projectPostTemplate = path.resolve(`src/templates/projectTemplate.js`)

  const blog = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: {regex: "/(blog)/"  }}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (blog.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  blog.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })


  const projects = await graphql(`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/(projects)/"  }}
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`)

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}