import * as React from 'react'
import {Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  container,
  navLinkText,
} from '../../components/layout.module.css'


const BlogPage = ({ data, children }) => {
  console.log("blog", children);
  return (
    <Layout className={container} pageTitle="Data Models">
     {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link className={navLinkText} to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Category: {node.frontmatter.categories}</p>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {path: {eq: "blog"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          categories
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Models" />

export default BlogPage