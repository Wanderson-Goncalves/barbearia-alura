import React from 'react';
import styles from './TituloPrincipal.module.css';

export default function TituloPrincipal({ children }) {
    return (
        <div className={styles.titulo__principal}>
            {children}
        </div>
    );
}

