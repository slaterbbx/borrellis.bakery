import React, { useState } from "react"

import Icon from "./icons/icons"

import { GalleryWrapper, ButtonsWrapper, ArrowLeft, ArrowRight, ImageWrapper } from "./galleryMechanics-style"
import BackgroundImage from "./dynamicBackground"

const GalleryMechanics = ({children, gallery}) => {
	let imgNum = useState(1);
	const changeCount = imgNum[1];
	const imageCount = imgNum[0];
	let currentImage = gallery[imgNum[0] - 1];

  const ImageSelectorHandler = direction => {
    if (direction === "right") {
      changeCount(imageCount + 1)
    } else if (direction === "left") {
      changeCount(imageCount - 1)
    }
    if (imageCount > gallery.length) {
      currentImage = gallery[0]
      changeCount(1)
    } else if (imageCount < 1) {
      currentImage = gallery[gallery.length - 1]
      changeCount(gallery.length)
		}
		return <BackgroundImage src={`${currentImage}.jpg`}>{children}</BackgroundImage>
	}

  return (
		<GalleryWrapper>
      <ImageWrapper>
				<ImageSelectorHandler/>
      </ImageWrapper>

      <ButtonsWrapper>
				<div className="arrowWrapper">
					<button className="button" onClick={ImageSelectorHandler.bind(null, "left")}>
						<Icon name="arrowCircle" styles={ArrowLeft} />
					</button>
				</div>
				<div className="arrowWrapper">
					<button className="button" onClick={ImageSelectorHandler.bind(null, "right")}>
						<Icon name="arrowCircle" styles={ArrowRight} />
					</button>
				</div>
      </ButtonsWrapper>
    </GalleryWrapper>
  )
}

export default GalleryMechanics
