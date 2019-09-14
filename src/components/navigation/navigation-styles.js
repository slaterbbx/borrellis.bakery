import styled, { css } from "styled-components"
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

export const CustomGalleryWrapper = styled.div`
position: absolute;
top: 15%;
left: 5rem;
transform: rotate(-20deg);
width: 60%;
height: 75%;

z-index: 20;

${media(
	["min-2000"],
	css`
		left: 10rem;
	`
)}
`

export const SocialWrapper = styled.div`
	display: flex;
	position: absolute;
	bottom: 3rem;
	right: 4rem;
	z-index: 7;

	.iconWrapper{
		width: 10rem;
		transform: translateY(0);
		opacity: 0.5;
		cursor: pointer;
		transition: all .2s ease-in;

		&:not(:last-child){
			margin-right: 4rem;
		}

		&:hover{
			transform: translateY(-1rem);
			opacity: 1;
		}
	}
`
export const SocialIcon = css`
	width: 100%;
	color: ${({theme}) => theme.colorWhite};
	filter: drop-shadow(0 0.5rem 1rem rgb(0, 0, 0, 0.2));
`