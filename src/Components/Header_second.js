import React, { useState, useRef } from 'react';
import './Header_second.css'
import './_search.scss';
import './_header.scss';
import './_breakpoints.scss'
const Header_second = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navMenuRef = useRef(null);
    const searchRef = useRef(null);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleNavToggleClick = () => {
        navMenuRef.current.classList.add('show-menu');
    };

    const handleNavCloseClick = () => {
        navMenuRef.current.classList.remove('show-menu');
    };

    const handleSearchBtnClick = () => {
        searchRef.current.classList.add('show-search');
    };

    const handleSearchCloseClick = () => {
        searchRef.current.classList.remove('show-search');
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Logo</a>

                <div ref={navMenuRef} className={`nav__menu ${isNavOpen ? 'show-menu' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link">Home</a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">About Us</a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">Services</a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">Featured</a>
                        </li>

                        <li className="nav__item">
                            <a href="#" className="nav__link">Contact Me</a>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close" onClick={handleNavCloseClick}>
                        <i className="ri-close-line"></i>
                    </div>
                </div>

                <div className="nav__actions">
                    <i className="ri-search-line nav__search" id="search-btn" onClick={handleSearchBtnClick}></i>

                    <i className="ri-user-line nav__login" id="login-btn"></i>

                    <div className="nav__toggle" id="nav-toggle" onClick={handleNavToggleClick}>
                        <i className="ri-menu-line"></i>
                    </div>
                </div>
            </nav>

            <div ref={searchRef} className={`search ${isSearchOpen ? 'show-search' : ''}`}>
                <form action="" className="search__form">
                  <img src='./user.svg'/>
                    <input type="search" placeholder="What are you looking for?" className="search__input" />
                </form>

                <i className="ri-close-line search__close" id="search-close" onClick={handleSearchCloseClick}></i>
            </div>
        </header>
    );
};

export default Header_second;
