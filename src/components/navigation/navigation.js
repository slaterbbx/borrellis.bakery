import React, {useContext} from 'react'
import NavigationButtons from './navigationButtons'
import Icon from '../../util/icons/icons'
import { MenuWrapper, GalleryWrapper, BreadIcon } from './navigation-styles'
import MenuLinks from './menuLinks/menuLinks'
import GatsbyGallery from '../gatsbyGallery/gatsbyGallery'

import NavSocialLinks from './menuLinks/navSocialLinks'

import {GlobalDispatchContext, GlobalStateContext} from '../context/globalContext'

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
	
	const dispatch = useContext(GlobalDispatchContext);
	const state = useContext(GlobalStateContext)
	const infoButtonState = state.infoButton

	// Simple handler that switchs the menu button clicked state boolean value onClick events
  const menuButtonChangeHandler = () => {
		dispatch({type: 'MENU_BUTTON'})
		// console.log('clicked')
	}
	
	// Simple handler that switchs the info button clicked state boolean value onClick events
  const infoButtonChangeHandler = () => {
		dispatch({type: 'INFO_BUTTON'})
		// console.log('clicked')
	}

  return (
    <>
      <NavigationButtons
        active={state.menuButton}
        inactive={!state.menuButton}
				clickedNavButton={menuButtonChangeHandler}
				clickedInfoButton={infoButtonChangeHandler}
				isHomePage={state.isHomePage}
				infoButtonState={infoButtonState}
				dispatch={dispatch}
      />

      <MenuWrapper active={state.menuButton} inactive={!state.menuButton}>
        <div className="innerWrapper">
          <Icon name="bread" styles={BreadIcon} />
          <MenuLinks clicked={menuButtonChangeHandler} path={path}/>
					<GalleryWrapper active={state.menuButton}>
						<GatsbyGallery gallery={gallery}/>
					</GalleryWrapper>
					<NavSocialLinks/>
        </div>
      </MenuWrapper>
    </>
  )
}

export default React.memo(NavMenu)
