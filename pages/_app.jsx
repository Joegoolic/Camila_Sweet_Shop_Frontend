import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.scss'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from '../components/Layout'
import React, { useState } from "react";
import Head from 'next/head';
import  {useEffect } from 'react';
import { Provider } from 'react-redux';
import {useStore } from'../store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [menuOpen, setMenuOpen] = useState(false)
  return ( 
    <Provider store = {store}>
      <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp
