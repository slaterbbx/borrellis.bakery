import React from 'react'

import SEO from "../components/seo"

import PageWrapper from '../components/pageElements/pageWrapper/pageWrapper'

const Contact = ()=> {
	return (
		<>
		<SEO title="Contact" />
		<PageWrapper src='bread.jpg' tint={true} fadeAnim={true}>
			<p>
				test
			</p>
		</PageWrapper>
		</>
	)
}

export default Contact