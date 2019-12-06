import React from "react"
import styled, { css } from "styled-components/macro"

import arrowCircle from "./svgs/arrowCircle"

const svgIcon = props => {
  let viewBox, PropsName, propsStyles
  viewBox = "0 0 32 32"

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
    case "arrowCircle":
      PropsName = arrowCircle
			break
    default:
      PropsName = arrowCircle
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
