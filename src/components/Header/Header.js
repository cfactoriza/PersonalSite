import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div>
            <header>
                <NavLink className={classes['Home-Link']} to='/'>
                    Home
                </NavLink>
                <NavLink className={classes['About-Link']} to='/About'>
                    About
                </NavLink>
                <NavLink className={classes['Projects-Link']} to='/Projects'>
                    Projects
                </NavLink>
            </header>
        </div>
    )
}

export default Header