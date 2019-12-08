import React from 'react'

import SEO from "../components/seo"
import PageWrapper from '../util/pageWrapper/pageWrapper'

const Four0four = ()=> {


	return (
		<>
		<SEO title="404" />
		<PageWrapper src='bread.jpg' tint={true} fadeAnim={true}>
			<p>
				test
			</p>
		</PageWrapper>
		</>
	)
}

export default Four0four