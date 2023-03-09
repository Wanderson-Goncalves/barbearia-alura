
import React from 'react';
import styles from './Products.module.css';
// import produtos from 'json/produtos.json'
import CardProduto from 'components/CardProduto';


export default function Products() {

    return (
        <>
            <ul className={styles.produtos}>
                <CardProduto />

            </ul>
            {/* <ul className={styles.produtos}>
                {produtos.map((produto) => {
                    return <CardProduto{...produto} key={produto.id} />
                }
                )}
            </ul> */}
        </>

    );
}

