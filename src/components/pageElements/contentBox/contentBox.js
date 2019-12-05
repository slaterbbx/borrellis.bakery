import React from 'react'
import * as Styled from './contentBox-styles'

const contentBox = ({children, verticleCenter, opacity, titleAlignment, width, title}) => {

	let contentBoxOpacity = `rgba(255, 255, 255, ${opacity})`;

	return (
		<Styled.ComponentVerticleCenter active={verticleCenter} >
			<Styled.ComponentWrapper>
				<Styled.BoxWrapper width={width}>
					<Styled.Title
					opacity={opacity}
					titleAlignment={titleAlignment}>
						{title}
					</Styled.Title>
					<Styled.BoxContent opacity={contentBoxOpacity}>
						{children}
					</Styled.BoxContent>
				</Styled.BoxWrapper>
			</Styled.ComponentWrapper>
		</Styled.ComponentVerticleCenter>
	)
}

export default contentBox;
