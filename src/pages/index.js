import React, {useContext} from 'react'

import SEO from '../components/seo'
import * as Styles from '../components/pageStyles/index-styles'
import Icon from '../util/icons/icons'

import {GlobalStateContext} from '../components/context/globalContext'


const IndexPage = () => {

	// Global Context state checks boolean value of infoButton for true / false
	const state = useContext(GlobalStateContext);
	const infoButtonState = state.infoButton;

  return (
    <>
      <SEO title="Home" />
				<Styles.LogoWrapper active={infoButtonState}>
					<Icon name="logo" styles={Styles.Logo}/>
				</Styles.LogoWrapper>
				<Styles.AboutWrapper active={infoButtonState}>
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
