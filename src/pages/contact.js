import React from 'react'

import SEO from "../components/seo"

import PageWrapper from '../util/pageWrapper/pageWrapper'

const Contact = ()=> {
	return (
		<>
		<SEO title="Contact" />
		<PageWrapper src='bg-pizza.jpg' tint={true} fadeAnim={true}>
			<p>
				test
			</p>
		</PageWrapper>
		</>
	)
}

export default Contact