import React, { Component } from 'react'

import LogInPanel from '../../containers/logInPanel/logInPanel'

import styles from './unLoggedLeftMenu.module.css'

import Logo from '../../UI/icons/Logo.svg'


import EventsImage from '../../UI/icons/leftMenu/icon-wydarzenia.svg'

import AboutUsImage from '../../UI/icons/leftMenu/icon-onas.svg'
import PoliticImage from '../../UI/icons/leftMenu/icon-polityka.svg'
import LogiInIcon from '../../UI/icons/leftMenu/icon-zaloguj.svg'

import { NavLink } from 'react-router-dom'


class UnloggedLeftMenu extends Component {

    state = {
        showLogin: false
    }

    showLoginHandler = () => {
        this.setState({ showLogin: true });
    }

    hideLoginHandler = () => {
        this.setState({ showLogin: false });
    }

    render() {
        return (
            <div className={styles.UnLoggedLeftMenu}>
                <LogInPanel
                    show={this.state.showLogin}
                    close={this.hideLoginHandler} />

                <div>
                    <NavLink to="/"><img src={Logo} /></NavLink>
                </div>
                <ul>
                    <li onClick={this.showLoginHandler} >
                        <img src={LogiInIcon} alt="log in icon" width="40px" height="40px" />
                        Zaloguj się
                    </li>
                    <li>
                        <NavLink activeClassName={styles.UnLoggedLeftMenuActiveLink} to="/events">
                            <img
                                src={EventsImage}
                                alt="events icon" width="40px" height="40px" />
                            Wydarzenia
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.LoggedLeftMenuActiveLink} to="/aboutUs">
                            <img src={AboutUsImage} alt="about us icon" width="40px" height="40px" />
                        O nas
                        </NavLink>
                    </li>
                    <li style={{ border: "none" }}>
                        <NavLink activeClassName={styles.LoggedLeftMenuActiveLink} to="/politics">
                            <img src={PoliticImage} alt="politics icon" width="40px" height="40px" />
                        Polityka Prywatności
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UnloggedLeftMenu;