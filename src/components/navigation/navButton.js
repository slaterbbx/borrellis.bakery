import React from 'react';
import * as Styles from './navButton-styles';

const navButton = ({ menuActive, menuClick }) => (
    <Styles.NavButton active={menuActive} inactive={!menuActive}>
        <div className="button" onClick={menuClick.bind(null, true)}>
            <span className="icon-x"></span>
            <span className="icon-x--lines"></span>
        </div>
    </Styles.NavButton>
)

export default navButton;