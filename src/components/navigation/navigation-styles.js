import styled, { css } from "styled-components"

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

export const ImageStyle = styled.div`
	position: absolute;
	top: 10%;
	left: 0;
	transform: rotate(-20deg);
	width: 60%;
	border: solid 6rem white;
	box-shadow: 2rem 2rem 10rem rgb(0,0,0,.2);

	z-index: 5;
`
