import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const ImageWrapper = styled.div`
	width: 700px;
	overflow: hidden;
`

const Testpage = () => {
	const data = useStaticQuery(graphql`
		query {
			allPrismicPizza {
				edges {
					node {
						id
						data {
							photo {
								localFile {
									childImageSharp {
										fluid(maxWidth: 1000, maxHeight: 800){
											...GatsbyImageSharpFluid_noBase64
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`)

	const match = useMemo(
    () => data.allPrismicPizza.edges.find(({ node }) => "Prismic__Pizza__XfhqZhEAAB4AEqmz" === node.id),
    [data]
	)

	return (
		<>
		<ImageWrapper>
			<Img fluid={match.node.data.photo.localFile.childImageSharp.fluid} alt="test"/>
		</ImageWrapper>
		</>
	)

}

export default Testpage
