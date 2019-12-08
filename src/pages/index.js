import React, {useContext, useEffect} from 'react'

import {GlobalStateContext, GlobalDispatchContext} from '../components/context/globalContext'
import SEO from '../components/seo'
import PageWrapper from '../components/pageElements/pageWrapper/pageWrapper'
import {FloatFrame, VerticleCenter, LogoWrapper, Logo, InfoWrapper} from '../pageStyles/index-styles'
import ContentBox from '../components/pageElements/contentBox/contentBox'
import Icon from '../util/icons/icons'

const IndexPage = () => {

	// Global Context state checks boolean value of infoButton for true / false
	const state = useContext(GlobalStateContext);
	const dispatch = useContext(GlobalDispatchContext);
	const infoButtonState = state.infoButton;

	useEffect(() => {
		// Seems simple but is managing a complex set of switchs handled by styled-components to handle the global navigation menu options ./components/navigation

		// If we come into the home page with a pre-existing infoButton state set to true, this means that we left the info tab open on the home page. We need to put that away so the logo animation can re-fire cleanly on entry.
		// Because the infoButton is set to false by default, being set to true only happens after we re-enter from another page withing the website.
		if ( state.infoButton === true ){
			dispatch({type: 'INFO_BUTTON'})
		}

		// We set our global isHomePage state to true so that we have an infoButton available on the home page instead of a return to home link / icon. This transition is managed in ./components/navigation/navigationButtons
		dispatch({type: 'IS_HOME', payload: true});

		// We cleanup and change the isHomePage state to false so that we can display the proper navigation options on every other page of the website.
		return function cleanup(){
			dispatch({type: 'IS_HOME', payload: false});
		}
		// eslint-disable-next-line
	},[])

  return (
		<>
    <SEO title="Home" />
    <PageWrapper src="case-bg.jpg" tint={true} fadeAnim={true}>
			<FloatFrame>
				<VerticleCenter>
					<LogoWrapper active={infoButtonState}>
						<Icon name="logo" styles={Logo}/>
					</LogoWrapper>
				</VerticleCenter>
			</FloatFrame>
				<InfoWrapper active={!infoButtonState}>
					<ContentBox title="About Borrelli's" verticleCenter={true} opacity=".6">
						Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers.  We keep our traditional recipes alive with family values at the forefront.  From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.
					</ContentBox>
				</InfoWrapper>
    </PageWrapper>
		</>
  )
}

export default IndexPage
