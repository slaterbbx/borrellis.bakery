import styled, { css } from "styled-components"

export const Logo = css`
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 85vh;

  z-index: 1;
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
