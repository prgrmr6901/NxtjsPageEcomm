import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  },[]);
  return( <>
  <Header/>
   <Component {...pageProps} />
   <Footer/>
  </>
  
);

}

