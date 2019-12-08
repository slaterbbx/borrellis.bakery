import styled, {css} from 'styled-components'

export const ComponentVerticleCenter = styled.div`
	${({ active }) =>
    active &&
		css`
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
    `}
`

export const ComponentWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
`

export const BoxWrapper = styled.div`
	display: block;
	width: 70%;

	${({width}) => width && css`
		width: ${width};
	`}
`

export const Title = styled.div`
	display: block;
	font-size: 16rem;
	padding: 0 1rem 0 1rem;
	line-height: .8;
	user-select: none;
	font-family: ${({theme}) => theme.fontPrimary};
	color: ${({theme}) => theme.colorWhite};

	${({titleAlignment, opacity}) => css`
		text-align: ${titleAlignment};
		opacity: ${opacity};
	`}
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-basis: auto;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 1rem;
	background-color: ${({theme}) => theme.colorWhite};
	box-shadow: 0 5rem 8rem rgb(0, 0, 0, .3);

	${({opacity}) => opacity && css`
		background-color: ${opacity};
	`}
`

export const ImageWrapper = styled.div`
	flex: 1 0 40%;
	min-height: 0vh;
	max-height: 100vh;
`

export const ContentCopy = styled.div`
	width: 100%;
	height: 100%;
	padding: 5.5rem 6.5rem 5.5rem 6.5rem;
	font-size: 2.4rem;
	letter-spacing: 1px;

	hyphens: auto;
`
