import React from 'react';
import styles from './Video.module.css';

export default function Video() {
    return (
        <div className={styles.video}>
            <iframe title='Scissor Cut Short Back' width="100%" height="315" src="https://www.youtube.com/embed/wcVVXUV0YUY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}
