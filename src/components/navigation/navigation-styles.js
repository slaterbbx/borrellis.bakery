import styled, { css } from "styled-components"

const buttonLineSize = css`
  width: 3rem;
  height: 0.4rem;
  border-radius: 2px;
`

const buttonColor = css`
  background-color: ${({ theme }) => theme.colorBrandRed};
`

export const NavButton = styled.div`
  .button {
    display: block;
    position: relative;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
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
      ${buttonColor};
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
        ${buttonColor};
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      ::before {
        transform: translateY(-1rem);
      }

      ::after {
        transform: translateY(1rem);
      }
    }
  }

  ${({ active }) =>
    active &&
    css`
      .icon-x::before {
        transform: rotate(-135deg) scale(1.1);
        transition-delay: 0.2s;
      }

      .icon-x::after {
        transform: rotate(135deg) scale(1.1);
        transition-delay: 0.2s;
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
      }

      .icon-x--lines::before,
      .icon-x--lines::after {
        transition: all 0.5s 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      }
    `}
`
