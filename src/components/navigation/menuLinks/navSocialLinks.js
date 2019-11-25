import React from 'react'
import styled, {css} from 'styled-components'

import Icon from '../../../util/icons/icons'

const SocialWrapper = styled.div`
	display: flex;
	position: absolute;
	bottom: 3rem;
	right: 4rem;
	z-index: 7;

	.iconWrapper{
		width: 4rem;
		transform: translateY(0);
		opacity: 0.5;
		cursor: pointer;
		transition: all .1s ease-in;

		&:not(:last-child){
			margin-right: 2rem;
		}

		&:hover{
			transform: translateY(-1rem);
			opacity: 1;
		}
	}
`
export const SocialIcon = css`
	width: 100%;
	color: ${({theme}) => theme.colorWhite};
	filter: drop-shadow(0 0.5rem 1rem rgb(0, 0, 0, 0.2));
`

const socialLinks = ()=> (
		<SocialWrapper>
			<div className="iconWrapper">
				<Icon name="yelp" styles={SocialIcon}/>
			</div>
			<div className="iconWrapper">
				<Icon name="facebook" styles={SocialIcon}/>
			</div>
			<div className="iconWrapper">
				<Icon name="instagram" styles={SocialIcon}/>
			</div>
		</SocialWrapper>
	)

export default socialLinks