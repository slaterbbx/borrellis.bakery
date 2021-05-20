import styled, {css, keyframes} from 'styled-components'

const fadeIn = keyframes`

	0% {
			opacity: 0;
			transform: scale(.95);
	}

	100% {
			opacity: 1;
			transform: scale(1);
	}

`

export const InfoWrapper = styled.div`
	position: relative;
	display: block;
	transition: 0.7s all .3s ease-out;
	transform: translate(0, 0);
	width: 100%;
	height: 100%;
	opacity: 1;

  z-index: 2;

	${({ active }) =>
    active &&
		css`
			opacity: 0;
			transform: translate(0, -250%);
    `}
`

// Needed this to break the flex boxes for a verticle center
export const FloatFrame = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 100%;

	z-index: 1;
`

export const VerticleCenter = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
`

export const LogoWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	padding: 0 2rem 0 2rem;
	width: 100%;
	height: 70vh;

	filter: drop-shadow( 0 2.5rem .6rem rgba(0, 0, 0, .5));

	opacity: 1;
	transition: .9s all .3s cubic-bezier(0.25, 0, 0.01, 0.99);

	/* fixes glitch in firefox with animation  */
	backface-visibility: hidden;

	animation: ${fadeIn} 1s ease-in;
	animation-fill-mode: backwards;

	z-index: 1;

	${({ active }) =>
    active &&
		css`
			opacity: 0;
    `}
`

export const Logo = css`
	min-width: 100%;
  max-width: 100%;
  max-height: 100%;
`