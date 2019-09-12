import React from 'react'
import styled from 'styled-components'
import Image from '../image'

const SlideShow = (selectorDirection, galleryImages)=> {

	let currentImage = gallery[0];
	let imageCountTicker = 0;

	const changeImageCount = (direction)=> {

		if ( direction === 'right' ){
			imageCountTick += 1
			currentImage = gallery[imageCountTicker];
		} else if ( direction === 'left' ){
			imageCountTick -= 1;
			currentImage = gallery[imageCountTick];
		}

		if ( indexOf(currentImage) >= gallery.length ){
			currentImage = gallery[0];
		}

		return currentImage;
	}

	let cockPit;

	const changeImageLeft = ()=> {

		const imageSrc = changeImageCount('left')

		cockPit = (
			<Image alt={`${imageSrc} photo of Borrelli's bakery in Pvd RI`} src={`${imageSrc}.jpg`} />
		)
	}

	const changeImageRight = ()=> {

		const imageSrc = changeImageCount('right')

		cockPit = (
			<Image alt={`${imageSrc} photo of Borrelli's bakery in Pvd RI`} src={`${imageSrc}.jpg`} />
		)
		
	}

	const galleryImageSelector = (selectorDirection)=> {

		if ( selectorDirection === 'left' ){
			changeImageLeft();
		} else if ( selectorDirection === 'right' ){
			changeImageRight();
		}

		return currentImage

	}


	return (

	)
}