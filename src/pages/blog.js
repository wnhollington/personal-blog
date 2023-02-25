import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Search from "../components/search"
const searchIndices = [{ name: `Articles`, title: `Articles` }]

const Blog = () => (
  <Layout>
    <div className="my-2 py-4">
      <Search indices={searchIndices} />
    </div>
  </Layout>
)

export default Blog

export const Head = () => (
  <Seo 
    title="Blog"
  />
)
