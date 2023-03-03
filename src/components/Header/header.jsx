import React from 'react';
import Logo from './logo.png';
import styles from './Hearder.module.css';
import Nav from 'components/Nav/nav';

export default function Header() {
    return (
        <header>
            <div className={styles.caixa} >
                <h1><img src={Logo} alt='Logo da Barbearia Alura' /></h1>
                <Nav />

              
            </div>
        </header>
    );
}
