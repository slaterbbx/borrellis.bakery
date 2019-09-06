import React from "react"
import styled, { css } from "styled-components/macro"

import Logo from "./svgs/Logo"
import About from "./svgs/About"
import Biscuits from "./svgs/Biscuits"
import Bread from "./svgs/Bread"
import Catering from "./svgs/Catering"
import Cheesecake from "./svgs/Cheesecake"
import Contact from "./svgs/Contact"
import Cupcake from "./svgs/Cupcake"
import Facebook from "./svgs/Facebook"
import Instagram from "./svgs/Instagram"
import Mapmarker from "./svgs/Mapmarker"
import Menu from "./svgs/Menu"
import Pastries from "./svgs/Pastries"
import Pie from "./svgs/Pie"
import PizzaCutter from "./svgs/PizzaCutter"
import Seasonal from "./svgs/Seasonal"
import Specialty from "./svgs/Specialty"
import Wholesale from "./svgs/Wholesale"
import Yelp from "./svgs/Yelp"
import Home from "./svgs/Home"

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
