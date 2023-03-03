import Banner from 'components/Banner/banner';
import Footer from 'components/Footer/footer';
import Header from 'components/Header/header';
import Home from 'pages/Home/home';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Header />
      <Banner />
      <Home />
      <Footer />
    </>
  </React.StrictMode>
);

