import * as React from 'react'
import {Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  container,
  navLinkText,
} from '../../components/layout.module.css'
import { MDXProvider } from '@mdx-js/react'



const About = ({ data, children }) => {
  console.log(children)
  console.log(data)
  return (
    <Layout className={container} pageTitle="About DeepTest">
      {data?.mdx.body}
      {children}
    </Layout>
  )
}

export const query = graphql`
query {
  mdx(frontmatter: {slug: {eq: "about"}}) {
    body
  }
}
`

export const Head = () => <Seo title="About" />

export default About