import React from 'react'

import SEO from "../components/seo"
import ContentBox from '../components/pageElements/contentBox/contentBox'
import PageWrapper from '../util/pageWrapper/pageWrapper'
import { withPreview } from 'gatsby-source-prismic'

import { graphql } from 'gatsby'

// export const query = graphql`
// 		query MyQuery{
// 			allPrismicAboutUs(limit: 1) {
// 				edges {
// 					node	{
// 						id
// 					}
// 				}
// 			}
// 		}
// 	`

// const about = query
// console.log(data);

const About = () => {

	return (
		<>
		<SEO title="About" />
		<PageWrapper src='bg-bakery.jpg' tint={true} fadeAnim={true}>
				<ContentBox title="A Family Business" titleAlign="right" titleSize="8rem" opacity=".6" width="70%" icon="bread" iconData={({bottom: '-17rem', right: '-20rem', width: '55rem'})} fontSize="2.8rem">
					Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers. We keep our traditional recipes alive with family values at the forefront. From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.
				</ContentBox>
				<ContentBox title="Title Test" titleSize="8rem" opacity=".6" width="70%" imgSrc="bakery.jpg" subTitle="Over 20 years in business">
					Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers. We keep our traditional recipes alive with family values at the forefront. From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.
				</ContentBox>
				<ContentBox title="Best on the market" titleSize="6rem"  opacity=".6" width="70%" icon="pizzaCutter">
					Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers. We keep our traditional recipes alive with family values at the forefront. From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.
				</ContentBox>
				<ContentBox title="Best on the market" titleAlign="right" titleSize="8rem" opacity=".6" width="70%" icon="specialty" subTitle="The best pizza in town!">
					Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers. We keep our traditional recipes alive with family values at the forefront. From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.
				</ContentBox>
		</PageWrapper>
		</>
	)
}

export default withPreview(About)