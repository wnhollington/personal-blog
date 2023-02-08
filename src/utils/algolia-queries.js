const indexName = `Articles`

const pageQuery = `{
  articles: allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}){
    edges {
      node {
        frontmatter {
          title
          date
          description
        }
        id
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
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