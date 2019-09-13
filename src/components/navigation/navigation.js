import React, { useState } from "react"
import NavButton from "./navigationButton"
import Icon from "../../util/icons/icons"
import * as Styles from "./navigation-styles"
import MenuLinks from "./menuLinks/menuLinks"
import styled, {css} from 'styled-components'
import media from '../../util/mediaQuery'
import GatsbyGallery from '../gatsbyGallery/gatsbyGallery'

const gallery = [
	"flour",
	"treats",
	"bread",
	"carrotCake",
	"pizza"
]

const CustomGalleryWrapper = styled.div`
	position: absolute;
	top: 15%;
	left: 5rem;
	transform: rotate(-20deg);
	width: 60%;
	height: 75%;

	z-index: 20;

	${media(
		["min-2000"],
		css`
			left: 10rem;
		`
	)}
`

const NavMenu = () => {
  const menuState = useState(false)

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
					<CustomGalleryWrapper>
						<GatsbyGallery gallery={gallery}/>
					</CustomGalleryWrapper>
        </div>
      </Styles.MenuWrapper>
    </>
  )
}

export default NavMenu
