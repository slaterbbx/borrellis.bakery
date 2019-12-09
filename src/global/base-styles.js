import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
		@import url("https://use.typekit.net/tui1rye.css");

    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
		}

    html {
    font-size: 62.5%;
    }

    body {
    box-sizing: border-box;
    background-color: black;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: 2rem;
    color: ${({ theme }) => theme.colorDarkGrey};

    a {
        color: ${({ theme }) => theme.colorDarkGrey};

        :active,
        :visited{
            color: ${({ theme }) => theme.colorDarkerGrey};
        }
    }
  
      h1, h2, h3, h4, h5, h6 {
				color: ${({ theme }) => theme.colorLightGrey};
				font-family: ${({ theme }) => theme.fontPrimary};
				font-weight: 700;
      }
    }

		::selection {
			background-color: ${({theme}) => theme.colorMedGrey};
			color: ${({theme}) => theme.colorWhite};
		}
`

export default GlobalStyle
