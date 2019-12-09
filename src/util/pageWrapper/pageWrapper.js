import React from "react"
import DynamicImage from '../dynamicImage/dynamicImage'
import VerticleScroll from '../verticleScroll'

import styled from 'styled-components'

const GlobalWrapper = styled.div`
	display: block;
	width: 100%;
	height: 100%;
`

const pageWrapper = ({src, tint, fadeAnim, children}) =>{
	return(
			<DynamicImage src={src} tint={tint} fadeAnim={fadeAnim}>
				<VerticleScroll leftSide={true}>
					<GlobalWrapper>
							{children}
					</GlobalWrapper>
				</VerticleScroll>
			</DynamicImage>
	)
}

export default React.memo(pageWrapper)