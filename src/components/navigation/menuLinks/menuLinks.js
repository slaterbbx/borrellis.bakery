import React, { useContext } from 'react'
import { LinkWrapper, LinkIcon, Wrapper, ListWrapper } from './menuLinks-styles'
import { Link } from 'gatsby'

import Icon from '../../../util/icons/icons'
import { GlobalStateContext } from '../../../components/context/globalContext'

const MenuContent = ({clicked}) => {
	
	const state = useContext(GlobalStateContext);
	// Generats the link list item with the name of the page
	const linkGenerator = (linkAddress) => {


		// Check if the menu is hidden, if so, remove tabbing functionality for the menu links with tabIndex
		if ( state.menuButton === false ){
			return (
				<LinkWrapper>
					<Link to={`/${linkAddress}`} tabIndex="-1" activeClassName="activeLink" onClick={clicked}>
						{linkAddress}
						<Icon name={linkAddress} styles={LinkIcon}/>
					</Link>
				</LinkWrapper>
			)
		}

    return (
			<LinkWrapper>
				<Link to={`/${linkAddress}`} activeClassName="activeLink" onClick={clicked}>
					{linkAddress}
					<Icon name={linkAddress} styles={LinkIcon}/>
				</Link>
			</LinkWrapper>
    )
	}
	
  return (
    <Wrapper>
      <ListWrapper>
        {linkGenerator("menu")}
        {linkGenerator("about")}
        {linkGenerator("contact")}
        {linkGenerator("wholesale")}
      </ListWrapper>
    </Wrapper>
  )
}

export default MenuContent
