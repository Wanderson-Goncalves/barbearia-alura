import React from 'react';
import styles from './Beneficios.module.css';
import beneficios from "./beneficios.jpg";
import TituloPrincipal from 'components/TituloPrincipal';

export default function Beneficios() {
    return (
        <section className={styles.beneficios}>
            <h3>
                <TituloPrincipal>
                    Benefícios
                </TituloPrincipal>
            </h3>

            <div className={styles.conteudo__beneficios}>
                <ul className={styles.lista__beneficios}>
                    <li className={styles.itens}>Atendimento aos Clientes</li>
                    <li className={styles.itens}>Espaço diferenciado</li>
                    <li className={styles.itens}>Localização</li>
                    <li className={styles.itens}>Profissionais Qualificados</li>
                    <li className={styles.itens}>Pontualidade</li>
                    <li className={styles.itens}>Limpeza</li>
                </ul><img src={beneficios} className={styles.imagem__beneficios} alt='' />
            </div>
        </section>
    );
}
