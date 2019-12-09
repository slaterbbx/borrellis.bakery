import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"

import BackgroundImage from "gatsby-background-image"
import { TintOverlay, NoTint } from "./dynamicImage-styles"
import { fadeIn } from '../../global/animations'

// props.fadeAnim is not passed via props but instead handled via styled components as the export is a styled component and this works.
const BackgroundSection = ({ className, src, tint, children }) => {
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

	let tintWrapper = <NoTint>{children}</NoTint>;
	if ( tint === true ){
		tintWrapper = <TintOverlay>{children}</TintOverlay>
	}

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={match.node.childImageSharp.fluid}
      backgroundColor={`#fff`}
    >
      {tintWrapper}
    </BackgroundImage>
  )
}

const DynamicImage = styled(BackgroundSection)`
	position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
	background-size: cover;
	background-repeat: repeat;


	${({fadeAnim}) => fadeAnim && css`
		animation: ${fadeIn} .5s ease-in;
		animation-fill-mode: backwards;
	`}
`

export default React.memo(DynamicImage)