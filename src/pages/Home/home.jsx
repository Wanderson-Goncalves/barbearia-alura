import Banner from 'components/Banner/banner';
import Beneficios from 'components/Beneficios/beneficios';
import Mapa from 'components/Mapa/mapa';
import Sobre from 'components/Sobre/sobre';
import Video from 'components/Video/video';
import React from 'react';

export default function Home() {
    return (
        <>
            <Banner />
            <main>
                <Sobre />
                <Mapa />
                <Beneficios />
                <Video />

            </main>
        </>
    );
}
