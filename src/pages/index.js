import React from 'react'

import SEO from '../components/seo'

import Icon from '../util/icons/icons'
import { css } from 'styled-components'
import SudoTable from '../util/sudoTable'
import media from '../util/mediaQuery'

// import styled from 'styled-components'

// const AboutWrapper = styled.div`
// 	position: relative;
//   display: block;
//   margin: 0 auto;
//   max-width: 75%;
//   max-height: 85vh;

// 	transition: 0.5s cubic-bezier(0.25, 0, 0.01, 0.99);
// 	transform: translateY(-200%);

//   z-index: 1;

// 	${({ active }) =>
//     active &&
//     css`
//       transform: translateY(0);
//     `}

// 	.title{
// 		display: block;
// 		color: ${({theme})=> theme.colorWhite};
// 		width: 100%;
// 		font-size: 10rem;
// 		line-height: .75;
// 		opacity: .7;
// 		margin-left: 1rem;
// 		font-family: ${({theme}) => theme.fontPrimary};
// 		text-align: left;
// 	}
	
// 	.innerWrapper{
// 		background-color: ${({theme})=> theme.colorWhite};
// 		width: 100%;
// 		height: 100%; 
// 		opacity: .7;
// 		font-size: 5rem;
// 		font-weight: 300;
// 		padding: 7rem;
// 		border-radius: 1rem;
// 		font-family: ${({theme}) => theme.fontSecondary};

// 		z-index: 1;
// 	}

// 	.copy{

// 		font-size: 3.5rem;
// 		font-weight: 300;
// 	}
// `



// !IMPORTANT, background gradiant is not working on home page after you travel to another page and then back to the home page. Issue lays in the pageWrapper and can be found via the layouts/index page
export const Logo = css`
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 85vh;

  z-index: 1;

  ${media(
    [null, "min-750"],
    css`
      max-height: 75vh;
    `
  )}

  ${media(
    ["min-400"],
    css`
      max-width: 90%;
    `
  )}
`

const IndexPage = () => {

  return (
    <>
      <SEO title="Home" />
        <SudoTable>
					{/* <AboutWrapper active={true}>
						<div className="title">
							About Borrelli's
						</div>
						<div className="innerWrapper">
							<p className="copy">Established in 1948, Borrelli’s Bakery has been a Rhode Island staple for decades. We strive everyday to produce only the best products and service for every one of our customers.  We keep our traditional recipes alive with family values at the forefront.  From Italian bread and pastries to birthday cakes and catering, Borrelli's Bakery delivers the best tasting food with quality ingredients! For three generations, the Borrelli family has been handing down their traditional recipes and expertise to produce some of Rhode Island’s finest breads, pastries, pizzas, and more.</p>
						</div>
					</AboutWrapper> */}
          <Icon name="logo" styles={Logo} />
        </SudoTable>
    </>
  )
}

export default IndexPage
