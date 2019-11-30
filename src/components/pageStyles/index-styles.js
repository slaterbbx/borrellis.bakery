import styled, {css} from 'styled-components'

export const AboutWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70%;

	transition: 0.6s cubic-bezier(0.25, 0, 0.01, 0.99);

  z-index: 1;

	${({ active }) =>
    active &&
    css`
      transform: translate(-50%, -250%);
    `}

	.title{
		display: block;
		color: ${({theme})=> theme.colorWhite};
		width: 100%;
		font-size: 10rem;
		line-height: .75;
		opacity: .7;
		margin-left: 1rem;
		font-family: ${({theme}) => theme.fontPrimary};
		text-align: left;
	}
	
	.innerWrapper{
		background-color: ${({theme})=> theme.colorWhite};
		opacity: .7;
		font-size: 5rem;
		font-weight: 300;
		padding: 7rem;
		border-radius: 1rem;
		font-family: ${({theme}) => theme.fontSecondary};

		z-index: 1;
	}

	.copy{
		font-size: 3.5rem;
		font-weight: 300;
	}
`

export const LogoWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(.9);
	width: 100%;
	height: 65vh;

	opacity: 0;
	transition: .9s cubic-bezier(0.25, 0, 0.01, 0.99);

	z-index: 1;

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