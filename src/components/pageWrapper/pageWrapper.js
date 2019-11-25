import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
import StyleChecker from "./pageWrapper-style"

const BackgroundSection = ({ className, src, gradiant, children }) => {
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

  // sends true or false to the pageWrapper-styles.js to determine what version to use, 1 or 2 gradiants.
  let CockPit = StyleChecker(gradiant)

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={match.node.childImageSharp.fluid}
      backgroundColor={`#fff`}
    >
      <CockPit>{children}</CockPit>
    </BackgroundImage>
  )
}

const pageWrapper = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
	background-repeat: no-repeat;
  background-attachment: fixed;
`

export default pageWrapper