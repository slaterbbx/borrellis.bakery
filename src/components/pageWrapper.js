import React, {useMemo} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const PageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	padding: 2rem;

	background: linear-gradient(rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 80%);
`

const BackgroundSection = ({ className, src, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
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

	const match = useMemo(() => (
		data.allFile.edges.find(({ node }) => src === node.relativePath)
	), [ data, src ])

	return (
		<BackgroundImage
			Tag="section"
			className={className}
			fluid={match.node.childImageSharp.fluid}
			backgroundColor={`#fff`}>
			<PageWrapper>
				{children}
			</PageWrapper>
		</BackgroundImage>
	)
}

const StyledBackgroundSection = styled(BackgroundSection)`
	width: 100%;
	height: 100vh;
  background-position: bottom center;
  background-size: cover;
`

export default StyledBackgroundSection