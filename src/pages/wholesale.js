import React from 'react'

import SEO from "../components/seo"
import PageWrapper from '../util/pageWrapper/pageWrapper'

const Wholesale = ()=> {


	return (
		<>
		<SEO title="Wholesale" />
		<PageWrapper src='bread.jpg' tint={true} fadeAnim={true}>
			<p>
				test
			</p>
		</PageWrapper>
		</>
	)
}

export default Wholesale