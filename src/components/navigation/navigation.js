import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import NavButton from './navigationButton'

const MenuWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${({theme}) => theme.colorBrandRed};
	width: 100%;
	height: 100%;

	z-index: 2;

	${({ active }) =>
    active &&
		css`
			transition: .5s cubic-bezier(.25,0,.01,.99);
      transform: translateY(0);
    `}

  ${({ inactive }) =>
    inactive &&
		css`
			transition: .5s cubic-bezier(.25,0,.01,.99);
			transform: translateY(100%);
    `}
`

const NavMenu = () => {
	
	const buttonState = useState(true);

	const buttonChangeHandler = () => {
			buttonState[1](!buttonState[0]);
	};

	return (
		<>
			<NavButton active={!buttonState[0]}
			inactive={buttonState[0]}
			clicked={buttonChangeHandler}/>

			<MenuWrapper active={!buttonState[0]}
			inactive={buttonState[0]}/>
		</>
	)
}

export default NavMenu