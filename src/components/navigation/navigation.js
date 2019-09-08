import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import NavButton from './navigationButton'
import Icon from '../../util/icons/icons'

const MenuWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${({theme}) => theme.colorBrandRed};
	width: 100%;
	height: 100%;

	overflow: hidden;
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

		.innerWrapper{
			height: 100%;
			width: 100%;

			background: linear-gradient(
				rgba(255, 255, 255, 0) 0%,
				rgba(255, 255, 255, 0.1) 100%
			);
		}
`

const BreadIcon = css`
	position: absolute;
	top: 50%;
	left: 50%;
	color: white;
	min-width: 150%;
	min-height: 150%;
	opacity: .03;
	transform: translate(-50%, -43%) rotate(90deg);
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
			inactive={buttonState[0]}>
				<div className="innerWrapper">
					<Icon name="bread" styles={BreadIcon} />
				</div>
			</MenuWrapper>
		</>
	)
}

export default NavMenu