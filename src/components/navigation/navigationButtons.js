import React from 'react'
import * as Styles from './navigationButtons-styles'
import Icon from '../../util/icons/icons'
import {Link} from 'gatsby'

const Navigation = ({ clickedNavButton, clickedInfoButton, active, inactive, isHomePage, infoButtonState}) => {

	let homeButton = (
		<>
			<Styles.HomeButtonWrapper>
				<Link to="/">
					<Styles.HomeButton active={false}>
						<Icon name="home" styles={Styles.Icon} viewbox="0 0 42 32" />
					</Styles.HomeButton>
				</Link>
				<Styles.HomeButton onClick={clickedInfoButton} active={true}>
							<Icon name="about" styles={Styles.Icon} viewbox="0 0 32 32"/>
				</Styles.HomeButton>
			</Styles.HomeButtonWrapper>
		</>
	)
	
	if ( isHomePage === true){
		homeButton = (
			<>
				<Styles.HomeButtonWrapper>
					<Link to="/">
						<Styles.HomeButton onClick={clickedInfoButton} active={infoButtonState}>
							<Icon name="home" styles={Styles.Icon} viewbox="0 0 42 32" />
						</Styles.HomeButton>
					</Link>
					<Styles.HomeButton onClick={clickedInfoButton} active={!infoButtonState}>
								<Icon name="about" styles={Styles.Icon} viewbox="0 0 32 32"/>
					</Styles.HomeButton>
				</Styles.HomeButtonWrapper>
			</>
		)
	}

	return (
  <Styles.NavButtonWrapper>
    <Styles.NavButton active={active} inactive={inactive}>
      <div className="button" onClick={clickedNavButton}>
        <span className="icon-x"></span>
        <span className="icon-x--lines"></span>
      </div>
    </Styles.NavButton>
    {homeButton}
  </Styles.NavButtonWrapper>
	)
}

export default Navigation
