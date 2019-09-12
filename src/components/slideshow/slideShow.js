import React, { useState } from 'react'
import Icon from '../../util/icons/icons'

import * as Styles from './slideShow-style'
import BackgroundImage from '../backgroundImage'

const gallery = ['flour', 'pizza', 'treats1', 'baggedPepper','treats2', 'breadHeld1', 'biscotti', 'treats3', 'pizzaChips', 'treats4'];
let currentImage = gallery[0];

const SlideShow = ()=> {

	let imageCountTicker = useState(1);

	const ImageSelector = (direction)=> {
		if ( direction === 'right' ){
			imageCountTicker[1](imageCountTicker[0] + 1);
			currentImage = gallery[imageCountTicker[0]];
		} else if ( direction === 'left' ){
			imageCountTicker[1](imageCountTicker[0] - 1);
			currentImage = gallery[imageCountTicker[0] - 2];
		}
		if ( imageCountTicker[0] > gallery.length ){
			currentImage = gallery[0];
			imageCountTicker[1](1);
		} else if ( imageCountTicker[0] < 1 ){
			currentImage = gallery[gallery.length - 1];
			imageCountTicker[1](gallery.length);
		}
		return <BackgroundImage src={`${currentImage}.jpg`} />
	}

	return (
		<Styles.SlideShowWrapper>

			<Styles.ImageWrapper>
				<ImageSelector />
			</Styles.ImageWrapper>

			<Styles.ButtonWrapper>
				<Styles.Button onClick={ImageSelector.bind(null, 'left')}>
					<Icon name="navArrow" styles={Styles.ArrowLeft} />
				</Styles.Button>
				<Styles.Button onClick={ImageSelector.bind(null, 'right')}>
					<Icon name="navArrow" styles={Styles.ArrowRight} />
				</Styles.Button>
			</Styles.ButtonWrapper>

		</Styles.SlideShowWrapper>
	)
}

export default SlideShow
