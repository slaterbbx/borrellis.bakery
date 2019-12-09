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
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;

	/*  TURN THIS OFF!!!  */
	margin-bottom: 5rem;
	margin-top: 5rem;
`

export const BoxWrapper = styled.div`
	display: block;
	width: 70%;

	${({width}) => width && css`
		width: ${width};
	`}
`

export const Title = styled.h1`
	display: block;
	font-size: 12rem;
	padding: 0 1rem 0 1rem;
	line-height: 1;
	user-select: none;
	font-family: ${({theme}) => theme.fontPrimary};
	font-variant: small-caps;
	letter-spacing: 3px;
	color: ${({theme}) => theme.colorWhite};

	${({titleAlign, opacity, size}) => css`
		text-align: ${titleAlign};
		opacity: ${opacity};
		font-size: ${size}
	`}
`

export const SubTitle = styled.h2`
	display: block;
	font-size: 4rem;
	font-family: ${({theme}) => theme.fontPrimary};
	letter-spacing: 2px;
	color:${({theme}) => theme.colorMedGrey};
	font-weight: 700;
	margin-bottom: 2rem;
`

export const ContentWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	${({flipped}) => flipped && css`
		direction: rtl;
		text-align: left;
	`}
`

export const ContentBox = styled.div`
	position: relative;
	display: flex;
	flex-basis: auto;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 1rem;
	background-color: ${({theme}) => theme.colorWhite};
	box-shadow: 0 5rem 8rem rgb(0, 0, 0, .3);

	${({opacity}) => opacity && css`
		background-color: rgba(255, 255, 255, ${opacity});
	`}
`

export const ImageWrapper = styled.div`
	position: relative;
	flex: 1 0 40%;
	min-height: 0vh;
	max-height: 100vh;

	box-shadow: 0 0 3rem rgba(0,0,0,.2);

	${({width}) => width && css`
		flex: 1 0 ${width};
	`}

	z-index: 2;
`

export const IconWrapper = styled.div`
	position: absolute;
	bottom: -10rem;
	right: -15rem;
	width: 50rem;
	color: ${({theme}) => theme.colorWhite};
	opacity: .2;

	${({bottom}) => css`
		bottom: ${bottom};
	`}
	${({right}) => css`
		right: ${right};
	`}
	${({width}) => css`
		width: ${width};
	`}

	z-index: 1;
`

export const ContentCopy = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 5.5rem 6.5rem 5.5rem 6.5rem;
	font-size: 2.4rem;
	
	${({fontSize}) => css`
	font-size: ${fontSize};
	`}

	letter-spacing: 1px;

	z-index: 2;
	hyphens: auto;
`
