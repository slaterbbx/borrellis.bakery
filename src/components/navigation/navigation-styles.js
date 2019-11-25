import styled, { css } from 'styled-components'
import media from '../../util/mediaQuery'

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colorBrandRed};
  width: 100%;
  height: 100%;

  overflow: hidden;
  z-index: 2;

  ${({ active }) =>
    active &&
    css`
      transition: 0.5s cubic-bezier(0.25, 0, 0.01, 0.99);
      transform: translateY(0);
    `}

  ${({ inactive }) =>
    inactive &&
    css`
      transition: 0.5s cubic-bezier(0.25, 0, 0.01, 0.99);
      transform: translateY(100%);
    `}

		.innerWrapper {
    height: 100%;
    width: 100%;

    background: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
`

export const BreadIcon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  min-width: 150%;
  min-height: 150%;
  opacity: 0.03;
  transform: translate(-50%, -25%) rotate(90deg);
`

export const GalleryWrapper = styled.div`
position: absolute;
top: 15rem;
left: 4rem;
margin-left: 3rem;
transform: rotate(-15deg);
width: 62%;
height: 80%;

z-index: 20;

${media(
	["min-2000"],
	css`
		left: 10rem;
	`
)}
`