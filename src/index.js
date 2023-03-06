import Footer from 'components/Footer/footer';
import Header from 'components/Header/header';
import Contact from 'pages/Contact/contact';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Header />      
      <Contact />
      <Footer />
    </>
  </React.StrictMode>
);

