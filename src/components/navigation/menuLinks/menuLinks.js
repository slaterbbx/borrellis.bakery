import React from "react"
import * as Styles from "./menuLinks-styles"
import { Link } from "gatsby"

import Icon from "../../../util/icons/icons"

const MenuContent = () => {

	const cockPit = (linkAddress, iconAlignment)=> {

		const left =(
		<Link to={linkAddress}>
			<Icon name={linkAddress} styles={Styles.LinkIcon} />
			{linkAddress}
		</Link>
		);

		const right = (
			<Link to={`/${linkAddress}`}>
				{linkAddress}
				<Icon name={linkAddress} styles={Styles.LinkIcon} />
			</Link>
		);

		let cockPit = right;

		if ( iconAlignment === 'left' ){
			cockPit = left;
		}

		return cockPit;
	}

  return (
    <Styles.Wrapper>
      <ul>
        <li>
          {cockPit('menu')}
        </li>
        <li>
					{cockPit('about')}
        </li>
        <li>
					{cockPit('contact')}
        </li>
        <li>
					{cockPit('wholesale')}
        </li>
      </ul>
    </Styles.Wrapper>
  )
}

export default MenuContent
