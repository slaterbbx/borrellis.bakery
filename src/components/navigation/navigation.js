import React, { useState } from "react"
import NavButton from "./navigationButton"
import Icon from "../../util/icons/icons"
import * as Styles from "./navigation-styles"
import MenuLinks from "./menuLinks/menuLinks"

import Image from '../image'

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
					<Styles.ImageStyle>
						<Image alt="Borrelli's Bakery" src="bakery.jpg" />
					</Styles.ImageStyle>
        </div>
      </Styles.MenuWrapper>
    </>
  )
}

export default NavMenu
