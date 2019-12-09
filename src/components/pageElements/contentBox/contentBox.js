import React from 'react'
import { ComponentVerticleCenter, ComponentWrapper, BoxWrapper, ContentWrapper, ContentCopy, ImageWrapper, Title, SubTitle, IconWrapper, ContentBox } from './contentBox-styles'
import DynamicImage from '../../../util/dynamicImage/dynamicImage'

import Icon from '../../../util/icons/icons'

const contentBox = ({children, verticleCenter, width, opacity, fontSize, title, titleAlign, titleSize, subTitle, icon, iconData, imgSrc, imgWidth, imgFlip }) => {

	const iconProps = { ...iconData };
	const iconBottom = iconProps.bottom;
	const iconRight = iconProps.right;
	const iconWidth = iconProps.width;

	let iconPlaceholder = null;
	let imagePlaceholder = null;
	let subTitlePlaceholder = null;
	
	if ( icon ){
		iconPlaceholder = <IconWrapper bottom={iconBottom} right={iconRight} width={iconWidth}><Icon name={icon} /></IconWrapper>;
	}

	if ( imgSrc ){
		imagePlaceholder = <ImageWrapper
			width={imgWidth}>
			<DynamicImage src={imgSrc} />
		</ImageWrapper>;
	}

	if ( icon && imgSrc ){
		iconPlaceholder = null;
	}

	if ( subTitle ){
	subTitlePlaceholder = <SubTitle>{subTitle}</SubTitle>
	}

	return (
		<ComponentVerticleCenter active={verticleCenter} >
			<ComponentWrapper>
				<BoxWrapper width={width}>
					<Title
					opacity={opacity}
					titleAlign={titleAlign}
					size={titleSize}>
						{title}
					</Title>

					<ContentWrapper flipped={imgFlip}>
						<ContentBox opacity={opacity}>
							{iconPlaceholder}
							<ContentCopy fontSize={fontSize}>
								{subTitlePlaceholder}
								{children}
							</ContentCopy>
							{imagePlaceholder}
						</ContentBox>
					</ContentWrapper>

				</BoxWrapper>
			</ComponentWrapper>
		</ComponentVerticleCenter>
	)
}

export default React.memo(contentBox);
