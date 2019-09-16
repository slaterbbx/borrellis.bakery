import styled, { css } from "styled-components"
import media from "../../util/mediaQuery"

const buttonLineSize = css`
  width: 4rem;
  height: 0.5rem;
  border-radius: 2rem;
`

const xColor1 = css`
  background-color: ${({ theme }) => theme.colorWhite};
`
const xColor2 = css`
  background-color: ${({ theme }) => theme.colorBrandRed};
`

export const NavButtonWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;

	${media(
      ["min-2000"],
      css`
        top: 3rem;
  			right: 3rem;
      `
    )}
`

export const NavButton = styled.div`
  background-color: ${({ theme }) => theme.colorBrandRed};
  border-radius: 100%;
  box-shadow: 0 0.5rem 1rem rgb(0, 0, 0, 0.2);
  transition: all 0.5s ease;

  z-index: 3;

  .button {
    display: block;
    position: relative;
    height: 7rem;
    width: 7rem;
    cursor: pointer;

    ${media(
      ["min-800"],
      css`
        height: 8rem;
        width: 8rem;
      `
    )}
  }

  .icon-x {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;

    &,
    ::before,
    ::after {
      display: inline-block;
      position: absolute;
      ${buttonLineSize}
    }

    ::before,
    ::after {
      content: "";
      left: 0;
      top: 0;
      transition: transform 0.4s;
      perspective: 1500;
    }

    &--lines {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: transparent;

      &,
      ::before,
      ::after {
        display: inline-block;
        position: absolute;
        ${buttonLineSize}
      }

      ::before,
      ::after {
        content: "";
        left: 0;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      ::before {
        transform: translateY(-1.1rem);
      }

      ::after {
        transform: translateY(1.1rem);
      }
    }
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colorWhite};
      box-shadow: 0 0 0 rgb(0, 0, 0, 0);

      .icon-x::before {
        transform: rotate(-135deg) scale(1.1);
        ${xColor2};
        transition-delay: 0.5s;
      }

      .icon-x::after {
        transform: rotate(135deg) scale(1.1);
        ${xColor2};
        transition-delay: 0.5s;
      }

      .icon-x--lines::before,
      .icon-x--lines::after {
        opacity: 0;
        transform: translateY(0);
      }
    `}

  ${({ inactive }) =>
    inactive &&
    css`
      .icon-x::before,
      .icon-x::after {
        transition: transform 0.4s;
        ${xColor1};
        transition-delay: 0.5s;
      }

      .icon-x--lines::before,
      .icon-x--lines::after {
        transition: all 0.5s 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        ${xColor1};
        transition-delay: 0.5s;
      }
    `}
`

export const HomeButton = css`
  margin-top: 1rem;
  width: 5rem;
  padding: 1rem;
  align-self: center;
  color: ${({ theme }) => theme.colorWhite};
  cursor: pointer;
  filter: drop-shadow(0 0.5rem 1rem rgb(0, 0, 0, 0.2));

	z-index: 2;

  ${media(
    ["min-800"],
    css`
      width: 6rem;
    `
  )}
`