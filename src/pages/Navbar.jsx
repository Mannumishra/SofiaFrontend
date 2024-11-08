import React, { useState, useEffect } from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaPhoneAlt, FaSearch, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // Import useTranslation
import logo from '../assets/images/sofia.png';
import i18n from '../components/i18n';

function Navbar() {
    const { t, i18n } = useTranslation();  // Initialize translation hook
    const location = useLocation();
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/OurProduct?search=${searchQuery}`);
        }
    };

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);  // Change the language
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Helper function to add active class based on the current path
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <>
            <section className={`headerSection pt-4 ${isSticky ? 'hide-row' : ''}`}>
                <div className="container-fluid">
                    <div className="row pb-2 top-row px-1 px-md-5">
                        <div className="col-12 col-md-5 text-center text-md-start mb-2 mb-md-0">
                            <div className="logoIcon">
                                <Link to="/"><FaFacebook size={20} className='icon m-1' /></Link>
                                <Link to="/"><FaWhatsapp size={20} className='icon m-1' /></Link>
                                <Link to="/"><FaLinkedin size={20} className='icon m-1' /></Link>
                                <Link to="/"><FaGoogle size={20} className='icon m-1' /></Link>
                                <Link to="/"><FaInstagram size={20} className='icon m-1' /></Link>
                                <Link to="/"><BsTwitterX size={20} className='icon m-1' /></Link>
                                <Link to="/"><FaYoutube size={20} className='icon m-1' /></Link>
                            </div>
                        </div>

                        <div className="col-12 col-md-7 text-center text-md-end">
                            <div className="actions d-flex">
                                <div className="search-box mb-2 mb-md-0">
                                    <form onSubmit={handleSearchSubmit} className="search-box mb-2 mb-md-0">
                                        <input
                                            type="text"
                                            placeholder={t('searchPlaceholder')}
                                            className="search-input"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                        />
                                        <button className="search-btn">
                                            <FaSearch />
                                        </button>
                                    </form>
                                </div>
                                <button className="language-button mb-2 mb-md-0" onClick={() => handleLanguageChange(i18n.language === 'en' ? 'hi' : 'en')}>
                                    {t('language')} 🌐
                                </button>
                                <Link to="GetdealerShip">
                                    <button className="cta-button mb-2 mb-md-0">{t('getDealership')}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className={`navbar px-3 px-md-5 navbar-expand-lg ${isSticky ? 'sticky' : ''}`}>
                    <div className="container-fluid container-section">
                        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
                            <img src={logo} alt="logo" className='logoImg' />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="navbarSupportedContent" aria-expanded={navbarOpen} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/')}`} to="/" onClick={closeNavbar}>{t('home')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/About-us')}`} to="/About-us" onClick={closeNavbar}>{t('aboutUs')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/OurProduct')}`} to="/OurProduct" onClick={closeNavbar}>{t('products')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/Certificates')}`} to="/Certificates" onClick={closeNavbar}>{t('certificates')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/Catalog')}`} to="/Catalog" onClick={closeNavbar}>{t('catalog')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActive('/Contact-us')}`} to="/Contact-us" onClick={closeNavbar}>{t('contactUs')}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#" onClick={closeNavbar} >
                                        <FaPhoneAlt /> +91-9015555501
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;
