import React, { useState } from "react"
import * as Styles from "./navigation-styles"

const Navigation = () => {

	const buttonState = useState(true);

	const buttonChangeHandler = () => {
			buttonState[1](!buttonState[0]);
	};

	return (
		<Styles.NavButton active={!buttonState[0]} inactive={buttonState[0]}>
			<div className="button" onClick={buttonChangeHandler}>
				<span className="icon-x"></span>
				<span className="icon-x--lines"></span>
			</div>
		</Styles.NavButton>
	)
}

export default Navigation;
