import React, { useState } from "react"
import * as Styles from "./navigation-styles"
import Icon from '../../util/icons/icons'

const Navigation = () => {

	const buttonState = useState(true);

	const buttonChangeHandler = () => {
			buttonState[1](!buttonState[0]);
	};

	return (

		// Make nacigation "backdrop" wrapper element for the background to the nav menu
		// set to 100% width / 100vh and transform off page.

		<Styles.NavButtonWrapper>
			<Styles.NavButton active={!buttonState[0]} inactive={buttonState[0]}>
				<div className="button" onClick={buttonChangeHandler}>
					<span className="icon-x"></span>
					<span className="icon-x--lines"></span>
				</div>
			</Styles.NavButton>
			<Icon name="about" styles={Styles.HomeButton}></Icon>
		</Styles.NavButtonWrapper>
	)
}

export default Navigation;
