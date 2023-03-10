import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NewsletterSignup from "../components/signup"
import SocialShare from "../components/socialShare"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const image = post.frontmatter.hero_image.childImageSharp.gatsbyImageData

  return (
    <Layout location={location} title={siteTitle}>
      <article className="max-w-5xl mx-auto mb-4 py-2">
        
        <header className="text-center my-4">
          <h1>{post.frontmatter.title}</h1>
          <div className="flex justify-center gap-4">
            <p>{post.frontmatter.date}</p>
            <p>&middot;</p>
            <p>{post.timeToRead} minute read</p>
          </div>
          <SocialShare url={post.fields.slug} title={post.frontmatter.title} description={post.frontmatter.description} />
          <GatsbyImage 
            image={image}
          />
          <p>{post.frontmatter.description}</p>
          <div class="my-12 h-1 bg-gray-200 w-20 mx-auto"></div>
        </header>
        
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />

      </article>

      {/* Signup */}
      <NewsletterSignup />

      {/* Navigation */}
      <nav className="max-w-5xl mx-auto my-4">
        <ul className="flex flex-wrap justify-between w-2xl mx-auto my-4">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" aria-label={previous.frontmatter.title} title={previous.frontmatter.title} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <h3 className="flex items-center gap-4"><FaArrowLeft/>Previous Post</h3>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" aria-label={next.frontmatter.title} title={next.frontmatter.title} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <h3 className="flex items-center justify-right gap-4">Next Post<FaArrowRight/></h3>
              </Link>
            )}
          </li>
        </ul>
      </nav>

    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        hero_image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      timeToRead
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
  }
`
