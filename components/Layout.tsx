import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { ReactNode } from "react";

export default function Layout ({children}: {children: ReactNode}){
    return(
    <>
        <Head>
            <link rel="shortcut icon" href = "/images/favicon.ico"/>
            <title>PokeNext</title>
        </Head>
        <Navbar/>
        <main className="main-container">{children}</main>
        <Footer/>
    </>
    )
}