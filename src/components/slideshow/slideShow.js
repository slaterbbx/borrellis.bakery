import React from 'react'
import { css } from 'styled-components'
import Icon from '../../util/icons/icons'

const ArrowStyle = css`
	width: 6rem;
`

const SlideShow = ()=> {
	
	return (
		<>
			<Icon name="navArrow" styles={ArrowStyle} />
		</>
	)
}

export default SlideShow
