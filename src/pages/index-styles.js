import styled, { css } from "styled-components"
import media from "../util/mediaQuery"

export const Logo = css`
	position: relative;
	display: block;
	margin: 0 auto;
	max-width: 90rem;

	${media(
    [null, "max-840"],
    css`
      max-height: 60rem;
    `
  )}

	${media(
    [null, "max-740"],
    css`
      max-height: 50rem;
    `
  )}

	${media(
    [null, "max-540"],
    css`
      max-height: 35rem;
    `
  )}

	${media(
    [null, "max-400"],
    css`
      max-height: 30rem;
    `
  )}

	${media(
    [null, "max-340"],
    css`
      max-height: 25rem;
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
