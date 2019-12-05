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
	font-size: 10rem;
	padding: 0 1rem 0 1rem;
	line-height: .75;
	font-family: ${({theme}) => theme.fontPrimary};
	color: ${({theme}) => theme.colorWhite};

	${({titleAlignment, opacity}) => css`
		text-align: ${titleAlignment};
		opacity: ${opacity};
	`}
`

export const BoxContent = styled.div`
	display: block;
	padding: 5.5rem 6.5rem 5.5rem 6.5rem;
	font-size: 3rem;
	letter-spacing: 1px;
	border-radius: 1rem;
	background-color: ${({theme}) => theme.colorWhite};

	${({opacity}) => opacity && css`
		background-color: ${opacity};
	`}
`
