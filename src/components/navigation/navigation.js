import React, { useState } from "react"
import NavigationButtons from "./navigationButtons"
import Icon from "../../util/icons/icons"
import * as Styles from "./navigation-styles"
import MenuLinks from "./menuLinks/menuLinks"
import GatsbyGallery from '../gatsbyGallery/gatsbyGallery'

const gallery = [
	"treats",
	"flour",
	"bread",
	"carrotCake",
	"pizza"
]

const NavMenu = ({path}) => {
  const menuButtonState = useState(true)
  const infoButtonState = useState(true)

  const menuButtonChangeHandler = () => {
    menuButtonState[1](!menuButtonState[0])
	}

  const infoButtonChangeHandler = () => {
    infoButtonState[1](!infoButtonState[0])
	}

	let isHomePage = false;

	if ( path === '/' ){
		isHomePage = true;
	} else {
		isHomePage = false;
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
					<Styles.CustomGalleryWrapper>
						<GatsbyGallery gallery={gallery}/>
					</Styles.CustomGalleryWrapper>
					<Styles.SocialWrapper>
						<div className="iconWrapper">
							<Icon name="yelp" styles={Styles.SocialIcon}/>
						</div>
						<div className="iconWrapper">
							<Icon name="facebook" styles={Styles.SocialIcon}/>
						</div>
						<div className="iconWrapper">
							<Icon name="instagram" styles={Styles.SocialIcon}/>
						</div>
					</Styles.SocialWrapper>
        </div>
      </Styles.MenuWrapper>
    </>
  )
}

export default NavMenu
