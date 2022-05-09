import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogPost from './BlogPost';

const BlogList = () => {

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div>
      {data.allMarkdownRemark.edges.map(edge => (
        <BlogPost
          key={edge.node.id}
          slug={edge.node.fields.slug}
          title={edge.node.frontmatter.title}
          date={edge.node.frontmatter.date}
          excerpt={edge.node.excerpt} />
      ))}
    </div>
  )
}


export default BlogList