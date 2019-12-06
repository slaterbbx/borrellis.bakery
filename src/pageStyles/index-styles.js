import styled, {css, keyframes} from 'styled-components'

const fadeIn = keyframes`

	0% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(.95);
	}

	100% {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
	}

`

export const InfoWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: 0.7s all .3s ease-out;

  z-index: 1;

	${({ active }) =>
    active &&
		css`
		/* moves contentBox off page */
      transform: translate(0, -250%);
    `}
`

export const LogoWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(.9);
	padding: 0 2rem 0 2rem;
	width: 100%;
	height: 75vh;

	filter: drop-shadow( 0 2.5rem .6rem rgba(0, 0, 0, .5));

	opacity: 0;
	transition: .9s all .3s cubic-bezier(0.25, 0, 0.01, 0.99);

	/* fixes glitch in firefox with animation  */
	backface-visibility: hidden;

	z-index: 1;

	animation: ${fadeIn} 1s ease-in;
	animation-fill-mode: backwards;

	${({ active }) =>
    active &&
		css`
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
    `}
`

export const Logo = css`
  max-width: 100%;
  max-height: 100%;
`