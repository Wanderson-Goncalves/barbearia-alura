import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav>
            <ul className={styles}>
                <li><a href="index.html">Home</a></li>
                <li><a href="produtos.html">Produtos</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
        </nav>
    );
}
