import React from 'react';
import styles from './CardProduto.module.css';

export default function CardProduto() {
    return (
        <>
            <li className={styles.card}>
                <h2>Cabelo</h2>
                <img src='https://i.postimg.cc/pXFq21NG/cabelo.jpg' alt='Cabelo' />
                <p className={styles.descricao}>Na tesoura ou máquina, como o cliente preferir</p>
                <p className={styles.preco}>R$ 25,00</p>
            </li>

            <li className={styles.card}>
                <h2>Barba</h2>
                <img src='https://i.postimg.cc/y8fPnq0N/barba.jpg' alt='Barba' />
                <p className={styles.descricao}>Corte e desenho profissional de barba</p>
                <p className={styles.preco}>R$ 18,00</p>
            </li>

            <li className={styles.card}>
                <h2>Cabelo + Barba</h2>
                <img src='https://i.postimg.cc/rFwRjDjS/cabelo-barba.jpg' alt='Cabelo + Barba' />
                <p className={styles.descricao}>Pacote completo de cabelo e barba</p>
                <p className={styles.preco}>R$ 35,00</p>
            </li>
        </>

        //     <li key={id} >
        //         <h2>{titulo}</h2>
        //         <img src={imagem} alt={titulo} />
        //         <p className={styles.descricao}>{descricao}</p>
        //         <p className={styles.valor}>{valor}</p>
        //     </li>
        // 
    );


}
