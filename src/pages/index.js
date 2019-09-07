import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"

import Icon from '../util/icons/icons'
import * as Styles from './index-styles'

import PageWrapper from '../components/pageWrapper'

const IndexPage = () => (
	<>
    <SEO title="Home" />
		<PageWrapper src="displayCase.jpg">
			<Styles.SudoTable>
				<div className="sudoTableCell">
					<Icon name="logo" styles={Styles.Logo}/>
				</div>
			</Styles.SudoTable>
		</PageWrapper>
	</>
)

export default IndexPage
