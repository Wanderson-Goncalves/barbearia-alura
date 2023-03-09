import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import PaginaBase from 'pages/PaginaBase';
import Products from 'pages/Products';


export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<PaginaBase/>}>
                    <Route index element={<Home />}></Route>
                    <Route path='produtos' element={<Products />}></Route>
                    <Route path='contato' element={<Contact />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    );
}
