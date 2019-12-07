import React, {useContext} from 'react'

import SEO from '../components/seo'
import * as Styles from '../pageStyles/index-styles'
import Icon from '../util/icons/icons'

import {GlobalStateContext} from '../components/context/globalContext'
import ContentBox from '../components/pageElements/contentBox/contentBox'


const IndexPage = () => {

	// Global Context state checks boolean value of infoButton for true / false
	const state = useContext(GlobalStateContext);
	const infoButtonState = state.infoButton;

  return (
    <>
      <SEO title="Home" />
			{/* I had to put this here to break the flexboxes so that I could use relative positioning */}
			<Styles.FloatFrame>
				<Styles.VerticleCenter>
					<Styles.LogoWrapper active={infoButtonState}>
						<Icon name="logo" styles={Styles.Logo}/>
					</Styles.LogoWrapper>
				</Styles.VerticleCenter>
			</Styles.FloatFrame>
				<Styles.InfoWrapper active={infoButtonState}>
					<ContentBox title="About Borrelli's" verticleCenter={true}>
						Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers.  We keep our traditional recipes alive with family values at the forefront.  From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.
					</ContentBox>
				</Styles.InfoWrapper>
    </>
  )
}

export default IndexPage
