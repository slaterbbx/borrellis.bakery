import styled, { css } from "styled-components"

export const GalleryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: solid 4rem white;
	border-radius: .5rem;
  box-shadow: 5rem 5rem 35rem rgb(255, 255, 255, 0.3);

  z-index: 5;
`

export const ArrowSharedStyles = css`
  width: 100%;
  margin-top: 2rem;
  color: white;
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
    	transform: translateY(-.5rem);
  	}
	}
`
