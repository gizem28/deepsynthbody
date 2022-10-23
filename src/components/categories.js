import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
    navLinks,
    navLinkItem,
    navLinkText,
    linkItem,
  } from './layout.module.css'

const useGetCategories = () => {
  const categories = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        nodes {
          frontmatter {
            categories
            slug
          }
          id
        }
      }
    }
  `);
  return categories;
};

export const CategoriesList = ({ data }) => {
  const { allMdx, frontmatter, categories, nodes } = useGetCategories();
  // console.log(allMdx?.nodes[0].frontmatter.slug)
  return (
    <div className="container">
      <ul className={navLinks}>
        {
          allMdx?.nodes.map((node, i) => {
            const { excerpt } = node;
            const { category, title, slug } = node.frontmatter;
            return(
                <li key= {i} className={linkItem}>
                <Link  className={navLinkText} to={`blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.categories}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

