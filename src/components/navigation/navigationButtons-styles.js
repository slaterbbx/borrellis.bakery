import styled, { css } from 'styled-components'

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
`

export const NavButton = styled.div`
  background-color: ${({ theme }) => theme.colorBrandRed};
  border-radius: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;

  z-index: 3;

  .button {
    display: block;
    position: relative;
    height: 7rem;
    width: 7rem;
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

			&:hover{
				background-color: ${({ theme }) => theme.colorBrandRedLight};
			}
    `}
`

export const HomeButtonWrapper = styled.div`
	position: relative;
	width: 100%;

	z-index: 4;
`

export const HomeButton = styled.div`
	position: absolute;
	width: 100%;
  cursor: pointer;
  filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.2));
	transition: all .6s ease;
	transform: translateX(0);

	margin-top: 1rem;

	${({active}) => active && css`
			transform: translateX(200%);
	`}
`
const iconSharedStyles = css`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  width: 4rem;
  color: ${({ theme }) => theme.colorWhite};
`

export const IconHome = css`
	${iconSharedStyles}
	margin-top: .2rem;
`

export const IconInfo = css`
	${iconSharedStyles}
`