import styled, { css } from "styled-components"

export const Wrapper = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 4;
  transition: transform 1s cubic-bezier(1, -0.22, 0.34, 1.52), opacity 1s;
`

export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
	text-align: right;
	width: 100%;

	backface-visibility: hidden;
`

export const ListItem = styled.div`
	a, a:visited{
		color: ${({ theme }) => theme.colorWhite};
		cursor: pointer;
		font-family: ${({ theme }) => theme.fontPrimary};
		letter-spacing: 0.2rem;
		display: inline-block;
		font-size: 5rem;
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

		:hover {
			background-position: 100%;
			color: ${({ theme }) => theme.colorBrandRed};
			transform: translateX(1rem);
		}

		${({ active }) =>
    active &&
			css`
			cursor: default;
			opacity: .3;
			color: ${({ theme }) => theme.colorBrandRed};
			background-position: 100%;

			:hover {
				transform: translateX(0);
			}
		`}
	}

	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`

export const LinkIcon = css`
  width: 4rem;
	margin-left: 2rem;

	color: inherit;
	filter: drop-shadow(0 0.5rem 1rem rgb(0, 0, 0, 0.2));
	
	&:last-child{
		margin-right: 1rem;
	}
`
