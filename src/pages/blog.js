import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
    <Layout pageTitle="Categories">
      <p>My cool categories will go in here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Categories" />

export default BlogPage