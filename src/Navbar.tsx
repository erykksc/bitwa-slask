import { useEffect, useState } from "react";
import { SectionProps } from "./interfaces";

interface NavLink {
    href: string,
    text: string
}

interface Props extends SectionProps {
    hrefs: NavLink[]
}

export default function Navbar({ id, hrefs }: Props) {
    const smWidth = 768;

    const [scrollDir, setScrollDir] = useState<'scrolled-down' | 'scrolled-up'>('scrolled-up');
    const [scrolled2top, setScrolled2top] = useState<boolean>(window.scrollY <= 30);
    const [smallScreen, setSmallScreen] = useState<boolean>(window.innerWidth <= smWidth);


    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
        if (lastScrollTop > window.scrollY)
            setScrollDir('scrolled-up');
        else
            setScrollDir('scrolled-down');
        lastScrollTop = window.scrollY;

        if (window.scrollY <= 30)
            setScrolled2top(true);
        else
            setScrolled2top(false);
    }

    const handleResize = () => {
        if (window.innerWidth <= smWidth)
            setSmallScreen(true);
        else
            setSmallScreen(false);
    };

    const onNavElemClick = () => {
        if (smallScreen) {
            const toggler = document.getElementById('navbar-toggler');
            toggler?.click();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);


        return (() => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        })
    }, [])

    const navElems = hrefs.map(({ href, text }, i) => {
        return (
            <li className="nav-item" key={text + '_' + i}>
                <a className="nav-link text-white" href={href} onClick={onNavElemClick}>{text}</a>
            </li>
        );
    });
    // <a href="#section-4" data-mdb-smooth-scroll="smooth-scroll" data-mdb-container="#example-4" data-mdb-duration="3000">Smooth Scroll to #section-4</a>
    return (
        <nav className={`navbar navbar-expand-md navbar-dark fixed-top ${scrollDir} ${scrolled2top && !smallScreen ? '' : 'bg-black'}`} id={id}>
            <div className="container">
                <a className="navbar-brand text-white fs-4" href="#page-top">
                    <img src='favicon.ico' alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    Bitwa o Śląsk
                </a>
                <button id='navbar-toggler' className="navbar-toggler navbar-toggler-right nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        {navElems}
                    </ul>
                </div>
            </div>
        </nav>
    );
}