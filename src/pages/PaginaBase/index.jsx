import Footer from 'components/Footer'
import Header from 'components/Header'
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
