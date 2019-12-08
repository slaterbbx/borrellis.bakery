/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// const React = require('react');
// const GlobalContextProvider = require('./src/components/context/globalContext').default;
// const HelmetProvider = require('./src/components/context/globalContext').HelmetProvider;
// const styled = require('styled-components');
// const ThemeProvider = require('styled-components').ThemeProvider;
// const GlobalBaseStyles = require('./src/global/base-styles');
// const Navigation = require('./src/components/navigation/navigation');

// const AppWrapper = styled.div`
// 	position: relative;
//   width: 100%;
//   height: 100vh;

//   overflow: hidden;
// `

// exports.wrapRootElement = ({ element }) => {
// 	return (

// 		<ThemeProvider theme={defaultTheme}>
// 			<GlobalBaseStyles />
// 			<AppWrapper>
// 			{/* <Navigation/> */}
// 				<GlobalContextProvider>
// 					<HelmetProvider>
// 						{element}
// 					</HelmetProvider>
// 				</GlobalContextProvider>
// 			</AppWrapper>
// 		</ThemeProvider>
// 	);
// }