import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    background-color: ${({theme}) => theme.colorPrimary};
    
    font-family: ${props => props.theme.secondaryFont};
    font-size: 1.6rem;
    color: ${({theme}) => theme.colorPrimaryAccent};

    a {
        color: ${({theme}) => theme.colorTertiary};

        :active,
        :visited{
            color: ${({theme}) => theme.colorTertiary};
        }
    }
  
      h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.primaryFont};
        font-variant: small-caps;
      }
    }
`;

export default GlobalStyle;