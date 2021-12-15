import { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { guest_register, request_refresh } from "../actions/auth";
import Navbar from "./Navbar";
import Head from 'next/head'
import Footer from "./Footer";
import React from 'react';

export default function Layout({ children,menuOpen,setMenuOpen,title,keywords,description}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.auth.loading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined){
            dispatch(request_refresh());
        }
        }, [dispatch]);
    useEffect(() => {
        const timer = setTimeout(() => {
            if(isAuthenticated === false){
                if (dispatch && dispatch !== null && dispatch !== undefined){
                    dispatch(guest_register());
                }
            }
        },10);
        return () => clearTimeout(timer);
        }, [dispatch,isAuthenticated]);
    
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name ='description' content={description}/>
                <meta name ='keywords' content ={keywords} />
            </Head>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    )
}
Layout.defaultProps ={
    title:'Mila\'s Sweet Shop',
    description:'Best Sweets You\'ll ever taste',
    keywords:'Baked goods'
}
/*  */