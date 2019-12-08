import React from 'react'
import styled, {css} from 'styled-components'

const ScrollableWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow-y: auto;
	overflow-x: hidden;

	${({leftSide}) => leftSide && css`
		direction: rtl;
	`}

	::-webkit-scrollbar {
		width: 1.5rem;
	}
	/* Track */
	::-webkit-scrollbar-track {
		background: ${({theme}) => theme.colorBrandRed};
	}
	/* Handle */
	::-webkit-scrollbar-thumb {
		background: white;  
		border-radius: 1rem;
		box-shadow: 0 0 1rem rgba(0,0,0,1);
	}
	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		cursor: pointer;
		background: ${({theme}) => theme.colorWhitePeach};
	}
`

const ScrollableWrapperFix = styled.div`
	width: 100%;
	height: 100%;
	/* fixes direction used to push scroll bar to left side of page on outer wrapper */
	direction: ltr;
`

const VerticleScroll = ({children, leftSide}) => (
		<ScrollableWrapper leftSide={leftSide}>
			<ScrollableWrapperFix>
				{children}
			</ScrollableWrapperFix>
		</ScrollableWrapper>
	)

export default VerticleScroll;