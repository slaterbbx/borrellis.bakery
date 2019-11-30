import React from 'react'
import * as Styles from './menuLinks-styles'
import { Link } from 'gatsby'

import Icon from '../../../util/icons/icons'

const MenuContent = ({clicked, path}) => {
	
	const linkGenerator = (linkAddress) => {
		let activeLink = false;
		let pathName = '';

		if (path !== undefined){
			pathName = path.substring(1, path.length-1);
		}

		if (linkAddress === pathName){
			activeLink = true;
		}

     return (
			<Styles.ListItem active={activeLink}>
				<Link to={`/${linkAddress}`} onClick={clicked}>
					{linkAddress}
					<Icon name={linkAddress} styles={Styles.LinkIcon}/>
				</Link>
			</Styles.ListItem>
    )
	}
	
  return (
    <Styles.Wrapper>
      <Styles.ListWrapper>
        {linkGenerator("menu")}
        {linkGenerator("about")}
        {linkGenerator("contact")}
        {linkGenerator("wholesale")}
      </Styles.ListWrapper>
    </Styles.Wrapper>
  )
}

export default MenuContent
