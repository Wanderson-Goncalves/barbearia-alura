import React from 'react';
import styles from './CardProduto.module.css';

export default function CardProduto(id, titulo, imagem, descricao, valor) {
    return (
        <div className={styles.card}>
            
            <h2>{titulo}</h2>
            <img src={imagem} alt={titulo} /> 
            <p className={styles.card__descricao}>{descricao}</p>
            <p className={styles.card__preco}>{valor}</p>      
          
        </div>
    );
}
