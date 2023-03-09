import React from 'react';
import Flyer from './banner.jpg';
import styles from './Banner.module.css';

export default function Banner() {
    return (       

        <img className={styles.banner} src={Flyer} alt=''/>
    );
}
