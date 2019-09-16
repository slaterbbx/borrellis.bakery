import React, { useEffect, useState } from "react"

import styled, { ThemeProvider } from "styled-components"
import { defaultTheme } from "../global/base-theme"
import GlobalBaseStyles from "../global/base-styles"

import Navigation from '../components/navigation/navigation'
import PageWrapper from '../components/pageWrapper/pageWrapper'

const ContentWrapper = styled.div`
	position: relative;
  width: 100%;
  height: 100vh;

  overflow: hidden;
`

const Layout = ({ children, path }) => {

	const background = useState('displayCase.jpg');

	useEffect(()=>{
		switch (path) {
			case "/":
				background[1]('displayCase.jpg')
				break;
			case "/menu/":
				background[1]('bakery.jpg')
				break;
			case "/about/":
					background[1]('bread.jpg')
					break;
			case "/contact/":
					background[1]('treats.jpg')
					break;
			case "/wholesale/":
					background[1]('carrotCake.jpg')
					break;
			default:
				background[1]('displayCase.jpg')
		}
	},[background, path])

	

	return (
		<ThemeProvider theme={defaultTheme}>
			<>
				<GlobalBaseStyles />
				<ContentWrapper>
					<Navigation />
					<PageWrapper src={background[0]} innerGradiant={true}>
						{children}
					</PageWrapper>
				</ContentWrapper>
			</>
		</ThemeProvider>
	)
}

export default Layout
