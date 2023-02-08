const indexName = `Articles`

const pageQuery = `{
  articles: allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}){
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
          description
          featured_image
        }
        id
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, fields, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...fields,
    ...frontmatter,
    ...rest
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.articles.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: {
      // attributesForFaceting: [`category`, `tags`],
      // attributesToSnippet: [`description:20`],
    },
  },
]

module.exports = queries