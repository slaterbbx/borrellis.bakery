import React from "react"
import DynamicImage from '../dynamicImage/dynamicImage'
import VerticleScroll from '../verticleScroll'

const pageWrapper = ({src, tint, fadeAnim, children}) =>{
	return(
			<DynamicImage src={src} tint={tint} fadeAnim={fadeAnim}>
				<VerticleScroll leftSide={true}>
					{children}
				</VerticleScroll>
			</DynamicImage>
	)
}

export default React.memo(pageWrapper)