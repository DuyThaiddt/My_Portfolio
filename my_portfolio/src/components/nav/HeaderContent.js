import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css"; // Import your CSS file for custom styles

export default function Header() {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [activeNavItem, setActiveNavItem] = useState(null);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        setVisible(currentScrollPos <= 0 || currentScrollPos < prevScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleSetActive = (to) => {
        setActiveNavItem(to);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`container-fluid top-0 position-fixed w-100 ${visible ? "visible" : "hidden"}`}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={scrollToTop} style={{ cursor: "pointer" }}>
                        <img src="assets/img/logo.png" width={"170px"} alt="Logo"></img>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                            <li className={`nav-item ${activeNavItem === "about" ? "active" : ""}`}>
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={10}
                                    onSetActive={() => handleSetActive("about")}
                                >
                                    <a className="nav-link" aria-current="page" href="#">
                                        <h4>About /{">"}</h4>
                                    </a>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeNavItem === "projects" ? "active" : ""}`}>
                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={10}
                                    onSetActive={() => handleSetActive("projects")}
                                >
                                    <a className="nav-link" aria-current="page" href="#">
                                        <h4>Projects /{">"}</h4>
                                    </a>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeNavItem === "contact" ? "active" : ""}`}>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={10}
                                    onSetActive={() => handleSetActive("contact")}
                                >
                                    <a className="nav-link" aria-current="page" href="#">
                                        <h4>Contact /{">"}</h4>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
