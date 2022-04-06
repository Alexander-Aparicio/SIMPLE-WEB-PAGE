import Head from 'next/head';
import Header from "../components/Globales/Header"
import MediosDePago from "../components/Globales/PaymentMethods"
import Poster from '../components/Inscripciones/Poster';
import Footer from '../components/Globales/Footer';
import WhatsApp from '../components/Globales/WhatsApp';
import MenuMobile from '../components/Globales/MenuHamburguesa';


const { Inscription } = require("../components/Inscripciones/Inscripciones")


const Inscripciones = ()=>{

    return(
        <>
        <Head>
            <meta property="og:title" content="Incripciones - Kpop"></meta>
            <meta name="twitter:title" content="➤Inscripciones: Baile K-pop"></meta>
            <meta name="description" content="Proceso de inscripción para K-pop dance." />
            <link rel="icon" href="/favicon.ico" />
            <title>Revolution Dance</title>
        </Head>

        <Header v={'sticky'} x={'rgba(215,33,186,0.86)'}/>

        <main>
            <Inscription />
            <MediosDePago />
            <Poster />
            <WhatsApp />
            <MenuMobile />
        </main>

        <Footer />
        </>
    )
}

export default Inscripciones