import React from 'react'
import { LinkWrapper, LinkIcon, Wrapper, ListWrapper } from './menuLinks-styles'
import { Link } from 'gatsby'

import Icon from '../../../util/icons/icons'

const MenuContent = ({clicked}) => {
	
	// Generats the link list item with the name of the page
	const linkGenerator = (linkAddress) => {
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
