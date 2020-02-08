import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image'

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>
                <h1>My Site's Files</h1>
                <table>
                    <thead>
                    <tr>
                        <th>image</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.allNodeArticle.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td><div style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}>
                                <Img fluid={ node.relationships.field_image.localFile.childImageSharp.fluid } />
                            </div></td>
                            <td>{node.title}</td>
                            <td>{node.body['value']}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          id
          title
          body{
            value
          }
          created
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
