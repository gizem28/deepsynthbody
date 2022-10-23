import * as React from 'react'
import {Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  container,
  navLinkText,
} from '../../components/layout.module.css'
import { MDXProvider } from '@mdx-js/react'



const Extra = ({ data, children }) => {
  console.log(children)
  console.log(data)
  return (
    <Layout className={container} pageTitle="Extra DeepTest">
      {/* {data?.mdx.body} */}
      <MDXProvider>{children}</MDXProvider>
    </Layout>
  )
}

export const query = graphql`
query {
  mdx(frontmatter: {slug: {eq: "extra"}}) {
    body
  }
}
`

export const Head = () => <Seo title="Extra" />

export default Extra