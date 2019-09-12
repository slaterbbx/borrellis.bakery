import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const BackgroundSectionImage = ({ className, src, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={match.node.childImageSharp.fluid}
      backgroundColor={`#fff`}
    >
      {children}
    </BackgroundImage>
  )
}

const ImageBackground = styled(BackgroundSectionImage)`
  width: 100%;
  height: 100%;
  background-position: top;
  background-size: cover;
`

export default ImageBackground
