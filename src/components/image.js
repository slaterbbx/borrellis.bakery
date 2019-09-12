import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({alt, src}) => {
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

  return <Img alt={alt} fluid={match.node.childImageSharp.fluid} />;
}

export default Image
