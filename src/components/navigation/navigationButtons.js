import React from "react"
import * as Styles from "./navigationButtons-styles"
import Icon from "../../util/icons/icons"
import {Link} from 'gatsby'

const LinkWrapper = {
	width: '100%',
	marginTop: '.2rem',
	textAlign: 'center'
}

const Navigation = ({ clickedNavButton, clickedInfoButton, active, inactive, isHomePage }) => {

	let cockPit = (
			<Link to="/" style={LinkWrapper}>
				<Icon name="home" styles={Styles.HomeButton} viewbox="0 0 42 32" />
			</Link>
	)
	
	if ( isHomePage === true ){
		cockPit = <Icon name="about" styles={Styles.HomeButton} viewbox="0 0 32 32" onClick={clickedInfoButton}/>
	}

	return (
  <Styles.NavButtonWrapper>
    <Styles.NavButton active={active} inactive={inactive}>
      <div className="button" onClick={clickedNavButton}>
        <span className="icon-x"></span>
        <span className="icon-x--lines"></span>
      </div>
    </Styles.NavButton>
    {cockPit}
  </Styles.NavButtonWrapper>
	)
}

export default Navigation
