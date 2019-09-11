import React from "react"
import * as Styles from "./navigationButton-styles"
import Icon from '../../util/icons/icons'

const Navigation = ({clicked, active, inactive}) => (
	<Styles.NavButtonWrapper>
		<Styles.NavButton active={active} inactive={inactive}>
			<div className="button" onClick={clicked}>
				<span className="icon-x"></span>
				<span className="icon-x--lines"></span>
			</div>
		</Styles.NavButton>

		{/* // Need to build a custom component for the ICON that is going
		// to be swapping out for a Home Icon in the future when clicked,
		// the component needs to have a state, one of the states of the component will display
		// the home Icon, the home Icon should be the default icon shown because it will be
		// the one that is displayed on 99% of pages, The  INFO icon will be
		// displayed only on the websites home page. The state for this "Icon swap" will
		// need to be housed on the index "HOME" page because it is the only page on the websites
		// that will ever require the icon "Component that handles the icon" to be in a state other than
		// the default state. Default will be applied if no props is set for "homepage={true} or similar." */}
		<Icon name="about" styles={Styles.HomeButton} />
	</Styles.NavButtonWrapper>
)

export default Navigation;
