/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import stylesNavbar from '@/styles/Navbar.module.scss'
import Logoc from '@/public/PhotoCL1.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div>
            <div className={stylesNavbar.navbar}>
                <Link href="/"><div className={stylesNavbar.logo}><Image src={Logoc} alt="Logo" /></div></Link>
                <div className={stylesNavbar.drop_down}>
                    <div className={stylesNavbar.drop_down_title} onClick={() => setMenuOpen(!menuOpen)}>
                        Sweets
                    </div>
                </div>
                <Link href ='/cart'><div className={stylesNavbar.cart}><FontAwesomeIcon icon={faCartShopping} /></div></Link>
            </div>
            <div className={stylesNavbar.drop}>
                {menuOpen ? 
                <div className={stylesNavbar.drop_down_content}>
                    <Link href ='/store'><div><a onClick={() => setMenuOpen(!menuOpen)}>All Sweets</a></div></Link>
                    <Link href ='store/donuts'><div><a onClick={() => setMenuOpen(!menuOpen)}>Donuts</a></div></Link>
                    <Link href ='/store/cakes'><div><a onClick={() => setMenuOpen(!menuOpen)}>Cakes</a></div></Link>
                    <Link href ='/store/cookies'><div><a onClick={() => setMenuOpen(!menuOpen)}>Cookies</a></div></Link>
                    <Link href ='/store/cupcakes'><div><a onClick={() => setMenuOpen(!menuOpen)}>Cupcakes</a></div></Link>
                    <Link href ='/store/brownies'><div><a onClick={() => setMenuOpen(!menuOpen)}>Brownies</a></div></Link>
                </div> 
                : null}
            </div>
        </div>
    );

}
