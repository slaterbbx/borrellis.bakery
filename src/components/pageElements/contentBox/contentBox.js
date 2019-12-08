import React from 'react'
import { ComponentVerticleCenter, ComponentWrapper, BoxWrapper, ContentWrapper, ContentCopy, ImageWrapper, Title } from './contentBox-styles'
import DynamicImage from '../../../util/dynamicImage/dynamicImage'

const contentBox = ({children, verticleCenter, opacity, titleAlignment, width, title}) => {

	let contentBoxOpacity = `rgba(255, 255, 255, ${opacity})`;

	//  ComponentVerticleCenter, ComponentWrapper, BoxWrapper, Title 
	return (
		<ComponentVerticleCenter active={verticleCenter} >
			<ComponentWrapper>
				<BoxWrapper width={width}>
					<Title
					opacity={opacity}
					titleAlignment={titleAlignment}>
						{title}
					</Title>

					<ContentWrapper opacity={contentBoxOpacity}>
						<ContentCopy>
							{children}
						</ContentCopy>
						<ImageWrapper>
							<DynamicImage src="displayCase.jpg" />
						</ImageWrapper>
					</ContentWrapper>

				</BoxWrapper>
			</ComponentWrapper>
		</ComponentVerticleCenter>
	)
}

export default React.memo(contentBox);
