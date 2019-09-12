import React, { useState } from "react"
import NavButton from "./navigationButton"
import Icon from "../../util/icons/icons"
import * as Styles from "./navigation-styles"
import MenuLinks from "./menuLinks/menuLinks"

import SlideShow from "../slideshow/slideShow"

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
          <SlideShow />
        </div>
      </Styles.MenuWrapper>
    </>
  )
}

export default NavMenu
