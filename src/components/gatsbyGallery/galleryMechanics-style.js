import styled, { css } from "styled-components"

// const fadeIn = keyframes`
// 	0% {
// 			opacity: .5;
// 	}
// 	100% {
// 			opacity: .7;
// 	}
// `

export const GalleryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colorWhite};
	padding: 3rem;
	border-radius: 1rem;
  box-shadow: 4rem 5rem 20rem rgb(255, 255, 255, 0.3);
`

export const ArrowSharedStyles = css`
  width: 100%;
  margin-top: 2rem;
  user-select: none;
`
export const ArrowRight = css`
  ${ArrowSharedStyles}
`
export const ArrowLeft = css`
  ${ArrowSharedStyles}
  transform: rotate(180deg);
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

	.button{
		transform: translateY(0);
		width: 8rem;
		cursor: pointer;
		color: ${({theme}) => theme.colorWhite};
		opacity: .7;

		:focus{
			color: ${({theme}) => theme.colorWhitePeach}
		}

		:active{
			/* color: blue; */
		}

		&:not(:last-child) {
			margin-right: 3rem;
		}
	}

	.arrowWrapper{
		padding: 1rem;
	}

	.arrowWrapper > .button{
		transition: all .2s ease;
		transform: translateY(0);

		&:hover {
			opacity: 1;
    	transform: translateY(-.5rem);
  	}
	}
`
