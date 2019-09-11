import React, { useState } from "react"
import NavButton from "./navigationButton"
import Icon from "../../util/icons/icons"
import * as Styles from "./navigation-styles"
import MenuLinks from "./menuLinks/menuLinks"

const NavMenu = () => {
  const buttonState = useState(true)

  const buttonChangeHandler = () => {
    buttonState[1](!buttonState[0])
  }

  return (
    <>
      <NavButton
        active={!buttonState[0]}
        inactive={buttonState[0]}
        clicked={buttonChangeHandler}
      />

      <Styles.MenuWrapper active={!buttonState[0]} inactive={buttonState[0]}>
        <div className="innerWrapper">
          <Icon name="bread" styles={Styles.BreadIcon} />
          <MenuLinks />
        </div>
      </Styles.MenuWrapper>
    </>
  )
}

export default NavMenu
