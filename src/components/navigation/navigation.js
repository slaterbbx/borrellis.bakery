import React, { useState } from "react"
import NavButton from "./navigationButton"
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

const NavMenu = () => {
  const menuState = useState(true)

  const buttonChangeHandler = () => {
    menuState[1](!menuState[0])
	}

  return (
    <>
      <NavButton
        active={!menuState[0]}
        inactive={menuState[0]}
        clicked={buttonChangeHandler}
      />

      <Styles.MenuWrapper active={!menuState[0]} inactive={menuState[0]}>
        <div className="innerWrapper">
          <Icon name="bread" styles={Styles.BreadIcon} />
          <MenuLinks />
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
