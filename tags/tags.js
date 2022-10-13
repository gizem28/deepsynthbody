import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`;
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;
  return (
    <Layout>
      <SEO title={`"${tag}" tag`} />
      <h1>{tagHeader}</h1>
      <div>
        <Link to="/tags">View all tags</Link>
        {edges.map(({ node }) => {
          const { excerpt } = node;
          const { slug, title, date, tags } = node.frontmatter;
          return (
            <div key={slug}>
              <Link to={`/blog${slug}`}>
                <h3>{title}</h3>
              </Link>
              <p>
                {date}
                <span> ● Tag: </span>
                {tags.map((tag) => (
                  <Link
                    key={tag.toLowerCase()}
                    to={`/tags/${tag.toLowerCase()}`}
                  >
                    {tag}
                  </Link>
                ))}
              </p>
              <p>{excerpt}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
export default Tags;