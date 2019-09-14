import styled, { css } from "styled-components"
import media from "../../../util/mediaQuery"

export const Wrapper = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 4;
  transition: transform 1s cubic-bezier(1, -0.22, 0.34, 1.52), opacity 1s;

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    z-index: 5;
    text-align: center;
    width: 100%;

    backface-visibility: hidden;

		${media(
      ["min-800"],
      css`
        text-align: right;
      `
    )}
  }

  li {
    a {
      color: ${({ theme }) => theme.colorWhite};
      cursor: pointer;
      font-family: ${({ theme }) => theme.fontPrimary};
      letter-spacing: 0.2rem;
      display: inline-block;
      font-size: 3.5rem;
      font-weight: 300;
			text-shadow: .3rem .2rem .4rem rgb(0,0,0,.1);
			text-transform: capitalize;
      padding: 1rem 2rem;
      color: ${({ theme }) => theme.fontPrimary};
      text-decoration: none;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        ${({ theme }) => theme.colorWhite} 50%
      );
      background-size: 230%;
      transition: all 0.48s;

			${media(
        ["min-350"],
        css`
          font-size: 5rem;
        `
      )}

			${media(
        ["min-500"],
        css`
          font-size: 7rem;
        `
      )}

			${media(
        ["min-1000"],
        css`
          font-size: 8rem;
        `
      )}

			${media(
        ["min-2000"],
        css`
          font-size: 10rem;
        `
      )}

      :hover {
        background-position: 100%;
        color: ${({ theme }) => theme.colorBrandRed};
        transform: translateX(1rem);
      }
    }

    &:not(:last-child) {
      margin-bottom: .5rem;

			${media(
        ["min-800"],
        css`
          margin-bottom: 1rem;
        `
      )}
    }
  }
`

export const LinkIcon = css`
  width: 2rem;
  margin-left: 1rem;

	color: inherit;
	filter: drop-shadow(0 0.5rem 1rem rgb(0, 0, 0, 0.2));
	
	&:last-child{
		margin-right: 1rem;
	}

	${media(
    ["min-350"],
    css`
      width: 3rem;
    `
  )}

	${media(
    ["min-500"],
    css`
      width: 4.5rem;
      margin-left: 2rem;

      &:last-child {
        margin-right: 1rem;
      }
    `
  )}

	${media(
    ["min-1000"],
    css`
      width: 5rem;
      margin-left: 3rem;
    `
  )}

	${media(
    ["min-2000"],
    css`
      width: 6rem;
      margin-left: 4rem;

      &:last-child {
        margin-right: 3rem;
      }
    `
  )}
`
