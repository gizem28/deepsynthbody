import * as React from 'react'
import {Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {
  container,
  navLinkText,
} from '../components/layout.module.css'
import Home from './home'


const HomePage = ({ data }) => {
  return (
   <Home/>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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

export const Head = () => <Seo title="Home" />

export default HomePage