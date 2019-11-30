import React from 'react'

import SEO from '../components/seo'
import * as Styles from './index-styles'
import Icon from '../util/icons/icons'

const IndexPage = () => {

	// need to setup global state to manage button activity values for animation functionality
	let temp = true;

  return (
    <>
      <SEO title="Home" />
					<Styles.LogoWrapper active={temp}>
						<Icon name="logo" styles={Styles.Logo}/>
					</Styles.LogoWrapper>
					<Styles.AboutWrapper active={temp}>
						<div className="title">
							About Borrelli's
						</div>
						<div className="innerWrapper">
							<p className="copy">Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers.  We keep our traditional recipes alive with family values at the forefront.  From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.</p>
						</div>
					</Styles.AboutWrapper>
    </>
  )
}

export default IndexPage
