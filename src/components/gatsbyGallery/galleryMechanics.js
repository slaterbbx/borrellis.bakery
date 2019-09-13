import React, { useState } from "react"

import Icon from "./icons/icons"

import * as Styles from "./galleryMechanics-style"
import BackgroundImage from "./dynamicBackground"

const GalleryMechanics = ({gallery}) => {
	let imageCountTicker = useState(1)
	let currentImage = gallery[imageCountTicker[0] - 1]

  const ImageSelector = direction => {
    if (direction === "right") {
      imageCountTicker[1](imageCountTicker[0] + 1)
    } else if (direction === "left") {
      imageCountTicker[1](imageCountTicker[0] - 1)
    }
    if (imageCountTicker[0] > gallery.length) {
      currentImage = gallery[0]
      imageCountTicker[1](1)
    } else if (imageCountTicker[0] < 1) {
      currentImage = gallery[gallery.length - 1]
      imageCountTicker[1](gallery.length)
    }
    return <BackgroundImage src={`${currentImage}.jpg`} />
  }

  return (
		<Styles.GalleryWrapper>
      <Styles.ImageWrapper>
				<ImageSelector />
      </Styles.ImageWrapper>

      <Styles.ButtonsWrapper>
				<div className="arrowWrapper">
					<div className="button" onClick={ImageSelector.bind(null, "left")}>
						<Icon name="navArrow" styles={Styles.ArrowLeft} />
					</div>
				</div>
				<div className="arrowWrapper">
					<div className="button" onClick={ImageSelector.bind(null, "right")}>
						<Icon name="navArrow" styles={Styles.ArrowRight} />
					</div>
				</div>
      </Styles.ButtonsWrapper>
    </Styles.GalleryWrapper>
  )
}

export default GalleryMechanics
