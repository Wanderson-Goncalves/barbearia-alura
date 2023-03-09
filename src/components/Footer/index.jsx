import React from 'react';
import LogoBranco from './logo-branco.png';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer >
            <img src={LogoBranco} alt='Logo da barbearia Alura' />
                <p className={styles.copyright}>&copy; Copyright Barbearia Alura - 2023</p>
        </footer>
    );
}
