import classes from './Navbar.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { FaInstagram, FaFacebook } from "react-icons/fa";



const Navbar = () => {
    const router = useRouter();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        const scrollY = window.scrollY;
        if (typeof window !== 'undefined') {
            if (scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
        } setLastScrollY(scrollY);
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    });

    const route = useRouter();

    




    return (
        <>

            <nav className={`${classes.navbar} ${show && classes.active}`}>
                <div className={classes.navLogo}>
                    <a onClick={() => route.push('/')}>
                        <Image onClick={closeMobileMenu} src='/inkara.png' alt="logo inkara"
                            width={100} height={73} style={{
                                filter: 'contrast(120%) brightness(100%)',
                                cursor: 'pointer'
                            }} />
                    </a>
                </div>

                <ul className={click ? classes.active : classes.navList}>

                    <li className={classes.navLinks} onClick={closeMobileMenu}>
                        <Link href="/">
                            <a className={router.pathname == "/" ? classes.activeTab : ""}>Home</a>
                        </Link>
                    </li>

                    <li className={classes.navLinks} onClick={closeMobileMenu}>
                        <Link href="/about">
                            <a className={router.pathname == "/about" ? classes.activeTab : ""}>About Us</a>
                        </Link>
                    </li>
                    <li className={classes.navLinks} onClick={closeMobileMenu}>
                        <Link href="/event">
                            <a className={router.pathname == "/event" ? classes.activeTab : ""}>Our Event</a>
                        </Link>
                    </li>
                    <li className={classes.navLinks} onClick={closeMobileMenu}>
                        <Link href="/tourism">
                            <a className={router.pathname == "/tourism" ? classes.activeTab : ""}>Tourism</a>
                        </Link>
                    </li>
                    <li className={classes.navLinks} onClick={closeMobileMenu}>
                        <Link href="/gallery">
                            <a className={router.pathname == "/gallery" ? classes.activeTab : ""}>Our Gallery</a>
                        </Link>
                    </li>
                    <li className={classes.navLinks} onClick={closeMobileMenu}>
                        <Link href="/contact">
                            <a className={router.pathname == "/contact" ? classes.activeTab : ""}>Contact Us</a>
                        </Link>
                    </li>
                    <div className={classes.socialMedia}>
                        <a href="https://www.instagram.com/senjafest"><FaInstagram size={30} /></a>
                        <a href="https://www.instagram.com/senjafest"><FaFacebook size={30} /></a>
                    </div>
                </ul>
                <div className={classes.socialMedia}>
                    <a className={classes.instagram} href="https://www.instagram.com/senjafest"><FaInstagram size={25} /></a>
                    <a className={classes.facebook} href="https://www.instagram.com/senjafest"><FaFacebook size={25} /></a>
                </div>

                <button className={click === false ?
                    classes.hamburger : classes.hamburger + ' ' + classes.active}
                    onClick={handleClick}
                >
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                </button>

            </nav>

        </>
    )
}

export default Navbar