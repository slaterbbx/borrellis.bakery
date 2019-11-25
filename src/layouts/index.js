import React, { useEffect, useState } from "react"

import styled, { ThemeProvider } from "styled-components"
import { defaultTheme } from "../global/base-theme"
import GlobalBaseStyles from "../global/base-styles"

import Navigation from '../components/navigation/navigation'
import PageWrapper from '../components/pageWrapper/pageWrapper'

const AppWrapper = styled.div`
	position: relative;
  width: 100%;
  height: 100vh;

  overflow: hidden;
`

const Layout = ({ children, path }) => {

	const background = useState('displayCase.jpg');
	const gradiant = useState(true);

	useEffect(()=>{
		switch (path) {
			case "/":
				background[1]('displayCase.jpg');
				break;
			case "/menu/":
				gradiant[1](false);
				background[1]('bakery.jpg');
				break;
			case "/about/":
				gradiant[1](false);
				background[1]('bread.jpg');
				break;
			case "/contact/":
				gradiant[1](false);
				background[1]('treats.jpg');
				break;
			case "/wholesale/":
				gradiant[1](false);
				background[1]('carrotCake.jpg')
				break;
			default:
				background[1]('displayCase.jpg')
		}
	},[path])

	

	return (
		<ThemeProvider theme={defaultTheme}>
			<>
				<GlobalBaseStyles />
				<AppWrapper>
					<Navigation path={path}/>
					<PageWrapper src={background[0]} gradiant={gradiant[0]}>
						{children}
					</PageWrapper>
				</AppWrapper>
			</>
		</ThemeProvider>
	)
}

export default Layout
