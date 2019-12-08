import React from 'react'
import styled from 'styled-components'
import GalleryMechanics from './galleryMechanics'

const GalleryWrapper = styled.div`
	width: 100%;
	height: 100%;
`

const GatsbyGallery = ({children, gallery, globalGallery})=> {
	return (
		<GalleryWrapper>
			<GalleryMechanics gallery={gallery} globalGallery={globalGallery}>
				{children}
			</GalleryMechanics>
		</GalleryWrapper>
	)
}

export default React.memo(GatsbyGallery);