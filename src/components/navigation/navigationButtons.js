import React, { useContext } from 'react'
import { NavButtonWrapper, NavButton, HomeButtonWrapper, HomeButton, IconInfo, IconHome } from './navigationButtons-styles'
import { navigate } from 'gatsby'

import { GlobalStateContext } from '../../components/context/globalContext'

const Navigation = ({ clickedNavButton, clickedInfoButton, active, inactive, isHomePage, infoButtonState, Icon}) => {
	
	const state = useContext(GlobalStateContext);

	// due to the complexity of the menu navigation functionality and design, we need to
	// determine if we are triggering either button to set set off the subscript to the global
	// context and make the appropriate changes
	const buttonSpecificityHandler = (buttonType) => {
		if( buttonType === 'home' && state.isHomePage === false ){
			clickedInfoButton();
			navigate("/");
		}else if ( buttonType === 'home' && state.isHomePage === true ){
			clickedInfoButton();
		}
		clickedInfoButton();
	}

	let homeButton = (
		<button onClick={buttonSpecificityHandler.bind(null, 'home')}>
			<HomeButton active={false}>
				<Icon name="home" styles={IconHome} viewbox="0 0 42 32" />
			</HomeButton>
		</button>
	);

	let infoButton = (
		<HomeButton onClick={buttonSpecificityHandler.bind(null, 'info')} active={true}>
			<Icon name="about" styles={IconInfo} viewbox="0 0 32 32"/>
		</HomeButton>
	);
	
	if ( isHomePage === true){
		homeButton = (
			<button onClick={buttonSpecificityHandler.bind(null, 'home')}>
				<HomeButton onClick={clickedInfoButton} active={!infoButtonState}>
					<Icon name="home" styles={IconHome} viewbox="0 0 42 32" />
				</HomeButton>
			</button>
		);
		infoButton = (
			<HomeButton onClick={buttonSpecificityHandler.bind(null, 'info')} active={infoButtonState}>
				<Icon name="about" styles={IconInfo} viewbox="0 0 32 32"/>
			</HomeButton>
		);
	}

	return (
  <NavButtonWrapper>
    <NavButton active={active} inactive={inactive}>
      <button className="button" onClick={clickedNavButton}>
        <span className="icon-x"></span>
        <span className="icon-x--lines"></span>
      </button>
    </NavButton>

		<HomeButtonWrapper>
			{homeButton}
			{infoButton}
		</HomeButtonWrapper>

  </NavButtonWrapper>
	)
}

export default Navigation
