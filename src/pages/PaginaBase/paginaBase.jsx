import Footer from 'components/Footer/footer'
import Header from 'components/Header/header'
import React from 'react'
import { Outlet } from 'react-router-dom';

export default function PaginaBase() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
