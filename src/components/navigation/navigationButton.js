import React from "react"
import * as Styles from "./navigationButton-styles"
import Icon from "../../util/icons/icons"

const Navigation = ({ clicked, active, inactive }) => (
  <Styles.NavButtonWrapper>
    <Styles.NavButton active={active} inactive={inactive}>
      <div className="button" onClick={clicked}>
        <span className="icon-x"></span>
        <span className="icon-x--lines"></span>
      </div>
    </Styles.NavButton>
    <Icon name="about" styles={Styles.HomeButton} viewbox="0 0 32 32" />
  </Styles.NavButtonWrapper>
)

export default Navigation
