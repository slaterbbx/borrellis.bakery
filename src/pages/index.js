import React from "react"

import SEO from "../components/seo"

import Icon from "../util/icons/icons"
import { css } from 'styled-components'
import SudoTable from "../util/sudoTable"
import media from "../util/mediaQuery"

export const Logo = css`
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 85vh;

  z-index: 1;

  ${media(
    [null, "min-750"],
    css`
      max-height: 75vh;
    `
  )}

  ${media(
    ["min-400"],
    css`
      max-width: 90%;
    `
  )}
`

const IndexPage = () => {

  return (
    <>
      <SEO title="Home" />
        <SudoTable>
          <Icon name="logo" styles={Logo} />
        </SudoTable>
    </>
  )
}

export default IndexPage
