import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav>
            <ul className={styles}>
                <li><Link className={styles.link} to='/'>Home</Link></li>
                <li><Link className={styles.link} to='/produto'>Produto</Link></li>
                <li><Link className={styles.link} to='/contato'>Contato</Link></li>
            </ul>
        </nav>
    );
}
