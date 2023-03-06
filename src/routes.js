import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/home';
import Product from 'pages/Product/product';
import Contact from 'pages/Contact/contact';
import PaginaBase from 'pages/PaginaBase/paginaBase';


export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<PaginaBase/>}>
                    <Route index element={<Home />}></Route>
                    <Route path='produtos' element={<Product />}></Route>
                    <Route path='contato' element={<Contact />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    );
}
