import * as React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="flex h-screen w-full">
        <div className="flex-1 bg-hero bg-cover bg-center bg-no-repeat flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1>{siteTitle}</h1>
            <p>{data.site.siteMetadata.description}</p>
            <Link to="/about" className="button">About Me</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
