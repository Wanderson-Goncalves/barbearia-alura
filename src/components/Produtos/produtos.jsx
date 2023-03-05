import React from 'react';
import styles from './Produtos.module.css';
import products from 'json/db.json';
import CardProduto from 'components/CardProduto/cardProduto';

export default function Produtos() {
    return (
        <section className={styles.produtos}>
          

            {products.map((produto) => {
                return <CardProduto {...produto} key={produto.id} />
            })} 
            

        </section>

    );
}
