import Banner from 'components/Banner';
import Beneficios from 'components/Beneficios';
import Mapa from 'components/Mapa';
import Sobre from 'components/Sobre';
import Video from 'components/Video';
import React from 'react';

export default function Home() {
    return (
        <>
            <Banner />
            
                <Sobre />
                <Mapa />
                <Beneficios />
                <Video />

           
        </>
    );
}
