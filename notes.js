// gallery buttens when menuButton false need tabIndex
// tabindex="-1" 
// tabindex is an html a tag attribute that will remove the tabability of a tags, I can use this to remove that annoying tab glitch caused when the menu should be hidden and not accessable when the menu is off of the screen.

// convert gallery to use regular images with alt tag so that they are indexed in google.
// Do the same conversion for contentBox systems images by creating a dynamic image loader like the dynamic image background loader, that has ( img{object-fit: cover} in the css )

// --------------------------------------------------

// CREATE: Finish 404 page
// CREATE: Menu page ( need contentBox mobile design first )
// CREATE: Wholesale page
// CREATE: Contact page ( requires hosting on Firebase first and using firebase cloud functions to email )

// IMPORTANT!!! Remove link on home button for info on home page only ( causes glitch - re render )

// CAN START MOBILE ON
// contentBox ( needed prior to Menu page )
// Menu

// Make logo flicker ( more like fire )

// ADD AMP


// USED FOR IMPORTING FROM PRISMIC

// import React, { useMemo } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'
// import Img from "gatsby-image"

// const ImageWrapper = styled.div`
// 	width: 700px;
// 	overflow: hidden;
// `

// const Testpage = () => {
// 	const data = useStaticQuery(graphql`
// 		query {
// 			allPrismicPizza {
// 				edges {
// 					node {
// 						id
// 						data {
// 							photo {
// 								localFile {
// 									childImageSharp {
// 										fluid(maxWidth: 1000, maxHeight: 800){
// 											...GatsbyImageSharpFluid_noBase64
// 										}
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	const match = useMemo(
//     () => data.allPrismicPizza.edges.find(({ node }) => "Prismic__Pizza__XfhqZhEAAB4AEqmz" === node.id),
//     [data]
// 	)

// 	return (
// 		<>
// 		<ImageWrapper>
// 			<Img fluid={match.node.data.photo.localFile.childImageSharp.fluid} alt="test"/>
// 		</ImageWrapper>
// 		</>
// 	)

// }

// export default Testpage
