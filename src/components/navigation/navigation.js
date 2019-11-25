import React, { useState } from 'react'
import NavigationButtons from './navigationButtons'
import Icon from '../../util/icons/icons'
import * as Styles from './navigation-styles'
import MenuLinks from './menuLinks/menuLinks'
import GatsbyGallery from '../gatsbyGallery/gatsbyGallery'

import NavSocialLinks from './menuLinks/navSocialLinks'

// Array of names of image files in the src/images folder used by a custom
// built gallary being used in the navigation menu on desktop view
const gallery = [
	"treats",
	"flour",
	"bread",
	"carrotCake",
	"pizza",
	"bakery"
]

const NavMenu = ({path}) => {
	// State for menuButton and infoButton
  const menuButtonState = useState(true)
  const infoButtonState = useState(true)

	// Simple handler that switchs the menu button clicked state boolean value onClick events
  const menuButtonChangeHandler = () => {
		menuButtonState[1](!menuButtonState[0])
		console.log(infoButtonState[0] + ' Clicked!!!!')
	}
	
	// Simple handler that switchs the info button clicked state boolean value onClick events
  const infoButtonChangeHandler = () => {
		infoButtonState[1](!infoButtonState[0])
	}

	// Checks if current page is root path based on props passed down from layouts/index.js
	let isHomePage = false;
	if ( path === '/' ){
		isHomePage = true;
	}

  return (
    <>
      <NavigationButtons
        active={!menuButtonState[0]}
        inactive={menuButtonState[0]}
				clickedNavButton={menuButtonChangeHandler}
				clickedInfoButton={infoButtonChangeHandler}
				isHomePage={isHomePage}
      />

      <Styles.MenuWrapper active={!menuButtonState[0]} inactive={menuButtonState[0]}>
        <div className="innerWrapper">
          <Icon name="bread" styles={Styles.BreadIcon} />
          <MenuLinks clicked={menuButtonChangeHandler}/>
					<Styles.GalleryWrapper>
						<GatsbyGallery gallery={gallery}/>
					</Styles.GalleryWrapper>
					<NavSocialLinks/>
        </div>
      </Styles.MenuWrapper>
    </>
  )
}

export default NavMenu
