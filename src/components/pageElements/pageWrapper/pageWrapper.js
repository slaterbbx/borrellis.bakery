import React from "react"
import DynamicImage from '../../../util/dynamicImage/dynamicImage'
import VerticleScroll from '../../../util/verticleScroll'

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