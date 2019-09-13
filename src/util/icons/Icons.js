import React from "react"
import styled, { css } from "styled-components/macro"

import Logo from "./svgs/logo"
import About from "./svgs/about"
import Biscuits from "./svgs/biscuits"
import Bread from "./svgs/bread"
import Catering from "./svgs/catering"
import Cheesecake from "./svgs/cheesecake"
import Contact from "./svgs/contact"
import Cupcake from "./svgs/cupcake"
import Facebook from "./svgs/facebook"
import Instagram from "./svgs/instagram"
import Mapmarker from "./svgs/mapmarker"
import Menu from "./svgs/menu"
import Pastries from "./svgs/pastries"
import Pie from "./svgs/pie"
import PizzaCutter from "./svgs/pizzaCutter"
import Seasonal from "./svgs/seasonal"
import Specialty from "./svgs/specialty"
import Wholesale from "./svgs/wholesale"
import Yelp from "./svgs/yelp"
import Home from "./svgs/home"

const svgIcon = props => {
  let viewBox, PropsName, propsStyles
  viewBox = "0 0 42 32"

  // if (
  //   props.name === "biscuites" ||
  //   props.name === "pastries" ||
  // 	props.name === "pie"
  // ) {
  //   viewBox = "0 0 64 32"
  // }

  if (props.styles) {
    propsStyles = css`
      fill: currentColor;
      ${props.styles}
    `
  } else if (!props.styles) {
    propsStyles = css`
      width: 2rem;
      height: 2rem;
      fill: currentColor;
    `
  }

  const Icons = styled.svg`
    ${propsStyles}
  `

  switch (props.name) {
    case "logo":
      PropsName = Logo
      viewBox = "0 0 282 238"
      break
    case "about":
			PropsName = About
			viewBox = "0 0 32 32"
      break
    case "biscuits":
      PropsName = Biscuits
      break
    case "bread":
      PropsName = Bread
      break
    case "catering":
      PropsName = Catering
      break
    case "cheesecake":
      PropsName = Cheesecake
      break
    case "contact":
      PropsName = Contact
      break
    case "cupcake":
      PropsName = Cupcake
      break
    case "facebook":
      PropsName = Facebook
      break
    case "instagram":
      PropsName = Instagram
      break
    case "mapmarker":
      PropsName = Mapmarker
      break
    case "menu":
      PropsName = Menu
      break
    case "pastries":
      PropsName = Pastries
      break
    case "pie":
      PropsName = Pie
      break
    case "pizzaCutter":
      PropsName = PizzaCutter
      break
    case "seasonal":
      PropsName = Seasonal
      break
    case "specialty":
      PropsName = Specialty
      break
    case "wholesale":
      PropsName = Wholesale
      break
    case "yelp":
      PropsName = Yelp
      break
    case "home":
      PropsName = Home
      break
    default:
      PropsName = About
  }

  if (props.viewbox) {
    const propsInput = props.viewbox
    const checkVbCount = propsInput.split(" ").length

    if (checkVbCount === 2) {
      const parseProps = propsInput.split(" ")
      const PropsConcat = [0, 0].concat(parseProps).join(" ")
      viewBox = PropsConcat
    } else if (checkVbCount === 4) {
      viewBox = propsInput
    }
  }

  return (
    <Icons viewBox={viewBox}>
      <PropsName />
    </Icons>
  )
}

export default React.memo(svgIcon)
