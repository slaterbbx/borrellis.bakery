import React from "react"
import * as Styles from "./menuLinks-styles"
import { Link } from "gatsby"

import Icon from "../../../util/icons/icons" 

const MenuContent = ({clicked}) => {

  const cockPit = (linkAddress) => {
     return (
      <Link to={`/${linkAddress}`} activeClassName="active" onClick={clicked}>
        {linkAddress}
        <Icon name={linkAddress} activeClassName="active" styles={Styles.LinkIcon}/>
      </Link>
    )
  }

  return (
    <Styles.Wrapper>
      <ul>
        <li>{cockPit("menu")}</li>
        <li>{cockPit("about")}</li>
        <li>{cockPit("contact")}</li>
        <li>{cockPit("wholesale")}</li>
      </ul>
    </Styles.Wrapper>
  )
}

export default MenuContent
