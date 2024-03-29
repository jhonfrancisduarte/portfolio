import { useState } from 'react';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('home');

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: "end" });
            setActiveNav(sectionId);
        }
    };

    return ( 
            <div className="main-div">

                <div className="header">

                    <div className="title-section">
                        <div className="logo">
                                <a href="/"><img src="public/images/logo.png" alt="logo" width="70"/></a>
                        </div>
                        <div className="under-box">
                            <span>Jhon Francis A. Duarte</span>
                            <div className="smedia-icons">
                                <a href="https://www.facebook.com/francis.duarte.319" target="newtab" className="a f"><ion-icon name="logo-facebook"></ion-icon></a>
                                <a href="mailto:jhonfrancisduarte12345@gmail.com?subject=Email%20Subject&body=Email%20Body" target="newtab" className="a m"><ion-icon name="mail-outline"></ion-icon></a>
                                <a href="https://www.linkedin.com/in/jhon-francis-duarte-a93931257/" target="newtab" className="a l"><ion-icon name="logo-linkedin"></ion-icon></a>
                                <a href="https://www.youtube.com/channel/UCDzjowV4oNJ_KEx2zJaMhYg" target="newtab" className="a y"><ion-icon name="logo-youtube"></ion-icon></a>
                            </div>
                        </div>
                        <div className="greetings">
                            <h1 className='home-greetings'>Hi! <span>I'm a:</span></h1>
                            <h5 className='job-title'>Web Developer | UX/UI Designer | Software Developer <span>| Game Developer</span></h5>
                            <h5 className='job-title2'>| Game Developer</h5>
                        </div>
                    </div>

                    <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>

                    <div className="burger-menu">
                        <ul className="burger-menu-navbar">
                                <li className="navitem">
                                    <a  
                                        href="#welcome"
                                        className={activeNav === 'welcome' ? 'active' : ''} 
                                        onClick={() => scrollToSection('welcome')}
                                    >
                                        Welcome!
                                    </a>
                                </li> 
                                <li className="navitem">
                                    <a
                                        href="#aboutme"
                                        className={activeNav === 'aboutme' ? 'active' : ''}
                                        onClick={() => scrollToSection('aboutme')}  
                                    >
                                        About Me
                                    </a>
                                </li>
                                <li className="navitem">
                                    <a
                                        href="#my-works"
                                        className={activeNav === 'my-works' ? 'active' : ''}
                                        onClick={() => scrollToSection('my-works')}  
                                    >
                                        My Works
                                    </a>
                                </li>
                                <li className="navitem">
                                    <a
                                        href="#contact-me"
                                        className={activeNav === 'contact-me' ? 'active' : ''}
                                        onClick={() => scrollToSection('contact-me')}  
                                    >
                                        Contact Me
                                    </a>
                                </li>
                        </ul>
                        <div className="copyright-mobile">
                            <p>ⓒ 2024 by JFAD</p>
                        </div>
                    </div>
                    
                    <div className="menu-overlay"></div>
                </div>

            </div>
    );
}
 
export default Navbar;