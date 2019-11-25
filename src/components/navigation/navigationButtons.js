import React from 'react'
import * as Styles from './navigationButtons-styles'
import Icon from '../../util/icons/icons'
import {Link} from 'gatsby'

const LinkWrapper = {
	width: '100%',
	marginTop: '.2rem',
	textAlign: 'center'
}

const Navigation = ({ clickedNavButton, clickedInfoButton, active, inactive, isHomePage }) => {

	let home_infoButton = (
			<Link to="/" style={LinkWrapper}>
				<Icon name="home" styles={Styles.HomeButton} viewbox="0 0 42 32" />
			</Link>
	)
	
	// NEED to put a div around the icon because it is not registering the onClick direction off of the SVG
	// Also, divide up the icon into two components so that we can have it swipe on and off the page when
	// when changing between icons? Just a thought.
	if ( isHomePage === true ){
		home_infoButton = <Icon name="about" styles={Styles.HomeButton} viewbox="0 0 32 32" onClick={clickedInfoButton}/>
	}

	return (
  <Styles.NavButtonWrapper>
    <Styles.NavButton active={active} inactive={inactive}>
      <div className="button" onClick={clickedNavButton}>
        <span className="icon-x"></span>
        <span className="icon-x--lines"></span>
      </div>
    </Styles.NavButton>
    {home_infoButton}
  </Styles.NavButtonWrapper>
	)
}

export default Navigation
