import React, { useEffect, useState } from 'react'

import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../global/base-theme'
import GlobalBaseStyles from '../global/base-styles'
import GlobalContext from '../components/context/globalContext'

import Navigation from '../components/navigation/navigation'
import PageWrapper from '../components/pageWrapper/pageWrapper'

const AppWrapper = styled.div`
	position: relative;
  width: 100%;
  height: 100vh;

  overflow: hidden;
`

const Layout = ({ children, path }) => {

	// Page background state ( changes with page address )
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
	},[background, path, gradiant])

	

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalContext>
				<GlobalBaseStyles />
				<AppWrapper>
					<Navigation path={path}/>
					<PageWrapper src={background[0]} gradiant={gradiant[0]}>
						{children}
					</PageWrapper>
				</AppWrapper>
			</GlobalContext>
		</ThemeProvider>
	)
}

export default Layout
