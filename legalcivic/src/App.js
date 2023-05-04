import logo from './logo.svg';
import './maicons.css';
import Index from './home/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function App() {
  React.useEffect(()=>{
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
  },[])
  return (
    <>
    <ToastContainer />
     <Index />

    </>
  );
}

export default App;
