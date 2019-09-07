import styled, { css } from "styled-components"
import media from "../util/mediaQuery"

export const Logo = css`
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 90%;

  ${media(
    [null, "min-750"],
    css`
      max-height: 70%;
    `
  )}

  ${media(
    ["min-400"],
    css`
      max-width: 90%;
    `
  )}
`

export const SudoTable = styled.div`
  display: table;
  width: 100%;
  height: 100%;

  .sudoTableCell {
    vertical-align: middle;
    display: table-cell;
  }
`
