import React, {useRef, useContext} from "react";
import {UgContext} from "./firebasestuff/UgContext";
import Logo2 from "./assets/logos2.jpeg";
// import Logo2 from "./assets/logo2.png";
import {NavLink} from "react-router-dom";
import "./Header.css";
import YoutubeIcon from './assets/headerLogo/Youtube_perspective_matte_s.png';
import homeIcon from './assets/headerLogo/Bank_perspective_matte_s.png';
import logoutIcon from './assets/headerLogo/Logout_perspective_matte_s.png';
import userIcon from './assets/headerLogo/User_perspective_matte_s.png';
import contactIcon from './assets/headerLogo/FAQ_perspective_matte_s.png';
import googleIcon from './assets/headerLogo/74zF.gif';
import GoogleAuth from './GoogleAuth';

function Header() {
    const {currentUser} = useContext(UgContext);
    const currentdisplayName = currentUser ? currentUser.displayName : <GoogleAuth/>;

    const navbarLinks = useRef(null);
    const handleNavbarButton = (e) => {
        navbarLinks.current.classList.toggle("menu-collapse");
    };

    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar-container ">
                    <a href="/" className="brand-title">
                        {/* Dental Port */}
                        <img className="header__logo" src={Logo2} alt=""/>
                    </a>
                    <button
                        onClick={(e) => {
                            handleNavbarButton(e);
                        }}
                        className="navbar-toggler"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div ref={navbarLinks} className="navbar-links menu-collapse">
                        <ul className="links-list">
                            <li
                                className="nav-item"
                                onClick={(e) => {
                                    handleNavbarButton(e);
                                }}
                            >
                                <NavLink
                                    activeClassName="is-active"
                                    exact={true}
                                    className="nav-link"
                                    to="/"
                                >
                                    <img src={homeIcon} width={'24px'} alt=""/> Home
                                </NavLink>
                            </li>

                            <li
                                className="nav-item"
                                onClick={(e) => {
                                    handleNavbarButton(e);
                                }}
                            >
                                <NavLink
                                    activeClassName="is-active"
                                    exact={true}
                                    className="nav-link"
                                    to="/contact"
                                >
                                    <img src={contactIcon} width={'24px'} alt=""/> Contact
                                </NavLink>
                            </li>
                            {" "}
                            <li
                                className="nav-item"
                                onClick={(e) => {
                                    handleNavbarButton(e);
                                }}
                            >
                                <NavLink
                                    activeClassName="is-active"
                                    exact={true}
                                    className="nav-link"
                                    to="/videos"
                                >
                                    <img src={YoutubeIcon} width={'24px'} alt=""/> Videos
                                </NavLink>
                            </li>



                            {" "}
                            <li
                                className="nav-item"
                                onClick={(e) => {
                                    handleNavbarButton(e);
                                }}
                            >
                                {/*<NavLink*/}
                                {/*    activeClassName="is-active"*/}
                                {/*    exact={true}*/}
                                {/*    className="nav-link"*/}
                                {/*    to="/login"*/}
                                {/*>*/}
                                     {currentdisplayName}
                                {/*</NavLink>*/}
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
