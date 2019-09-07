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
  viewBox = "0 0 32 32"

  if (
    props.name === "biscuites" ||
    props.name === "pastries" ||
    props.name === "pie"
  ) {
    viewBox = "0 0 64 32"
  }

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
    case "About":
      PropsName = About
      break
    case "Biscuits":
      PropsName = Biscuits
      break
    case "Bread":
      PropsName = Bread
      break
    case "Catering":
      PropsName = Catering
      break
    case "Cheesecake":
      PropsName = Cheesecake
      break
    case "Contact":
      PropsName = Contact
      break
    case "Cupcake":
      PropsName = Cupcake
      break
    case "Facebook":
      PropsName = Facebook
      break
    case "Instagram":
      PropsName = Instagram
      break
    case "Mapmarker":
      PropsName = Mapmarker
      break
    case "Menu":
      PropsName = Menu
      break
    case "Pastries":
      PropsName = Pastries
      break
    case "Pie":
      PropsName = Pie
      break
    case "PizzaCutter":
      PropsName = PizzaCutter
      break
    case "Seasonal":
      PropsName = Seasonal
      break
    case "Specialty":
      PropsName = Specialty
      break
    case "Wholesale":
      PropsName = Wholesale
      break
    case "Yelp":
      PropsName = Yelp
      break
    case "Home":
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
