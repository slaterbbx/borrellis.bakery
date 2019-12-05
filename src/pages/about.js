import React from 'react'

import SEO from "../components/seo"
import ContentBox from '../components/pageElements/contentBox/contentBox'

const About = ()=> {

	return (
		<>
		<SEO title="About" />
		<ContentBox title="About Borrelli's" verticleCenter={true} opacity=".6" width="70%">
			Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers. We keep our traditional recipes alive with family values at the forefront. From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.
		</ContentBox>
		</>
	)
}

export default About