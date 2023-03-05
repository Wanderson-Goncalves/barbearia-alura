import Footer from 'components/Footer/footer';
import Header from 'components/Header/header';
import Product from 'pages/Product/product';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Header />      
      <Product />
      <Footer />
    </>
  </React.StrictMode>
);

