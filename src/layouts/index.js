import React from 'react'

import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../global/base-theme'
import GlobalBaseStyles from '../global/base-styles'
import { HelmetProvider } from 'react-helmet-async';

import GlobalContext from '../components/context/globalContext'
import Navigation from '../components/navigation/navigation'

const AppWrapper = styled.div`
	position: relative;
  width: 100%;
  height: 100vh;

  overflow: hidden;
`

const Layout = ({ children, path }) => {

	// Page background state ( changes with page address )
	// const background = useState('displayCase.jpg');
	// const gradiant = useState(true);

	// useEffect(()=>{
	// 	switch (path) {
	// 		case "/":
	// 			gradiant[1](false);
	// 			background[1]('bread.jpg');
	// 			break;
	// 		case "/menu/":
	// 			gradiant[1](false);
	// 			background[1]('bread.jpg');
	// 			break;
	// 		case "/about/":
	// 			gradiant[1](false);
	// 			background[1]('bakery.jpg');
	// 			break;
	// 		case "/contact/":
	// 			gradiant[1](false);
	// 			background[1]('treats.jpg');
	// 			break;
	// 		case "/wholesale/":
	// 			gradiant[1](false);
	// 			background[1]('carrotCake.jpg')
	// 			break;
	// 		default:
	// 			gradiant[1](true);
	// 			background[1]('displayCase.jpg')
	// 	}
	// // only runs on change of path props from react
	// // eslint-disable-next-line
	// },[path])

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalContext>
				<GlobalBaseStyles />
				<AppWrapper>
					<HelmetProvider>
					<Navigation path={path}/>
						{children}
					</HelmetProvider>
				</AppWrapper>
			</GlobalContext>
		</ThemeProvider>
	)
}

export default Layout
