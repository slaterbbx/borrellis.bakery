import React from 'react'
import * as Styles from './navigationButtons-styles'
import Icon from '../../util/icons/icons'
import {Link} from 'gatsby'

const Navigation = ({ clickedNavButton, clickedInfoButton, active, inactive, isHomePage, infoButtonState}) => {
	
	let homeButton = (
		<Link to="/" >
			<Styles.HomeButton active={false}>
				<Icon name="home" styles={Styles.Icon} viewbox="0 0 42 32" />
			</Styles.HomeButton>
		</Link>
	);

	let infoButton = (
		<Styles.HomeButton onClick={clickedInfoButton} active={true}>
			<Icon name="about" styles={Styles.Icon} viewbox="0 0 32 32"/>
		</Styles.HomeButton>
	);
	
	if ( isHomePage === true){
		homeButton = (
			<Link to="/" >
				<Styles.HomeButton onClick={clickedInfoButton} active={!infoButtonState}>
					<Icon name="home" styles={Styles.Icon} viewbox="0 0 42 32" />
				</Styles.HomeButton>
			</Link>
		);
		infoButton = (
			<Styles.HomeButton onClick={clickedInfoButton} active={infoButtonState}>
				<Icon name="about" styles={Styles.Icon} viewbox="0 0 32 32"/>
			</Styles.HomeButton>
		);
	}

	return (
  <Styles.NavButtonWrapper>
    <Styles.NavButton active={active} inactive={inactive}>
      <div className="button" onClick={clickedNavButton}>
        <span className="icon-x"></span>
        <span className="icon-x--lines"></span>
      </div>
    </Styles.NavButton>

		<Styles.HomeButtonWrapper>
			{homeButton}
			{infoButton}
		</Styles.HomeButtonWrapper>

  </Styles.NavButtonWrapper>
	)
}

export default Navigation
