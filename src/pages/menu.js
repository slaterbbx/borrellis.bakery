import React from 'react'

import SEO from "../components/seo"
import PageWrapper from '../util/pageWrapper/pageWrapper'

const Menu = ()=> {


	return (
		<>
		<SEO title="Menu" />
		<PageWrapper src='bg-bread.jpg' tint={true} fadeAnim={true}>
			<p>
				test
			</p>
		</PageWrapper>
		</>
	)
}

export default Menu