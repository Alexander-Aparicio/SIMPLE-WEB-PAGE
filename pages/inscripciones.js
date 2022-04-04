import Head from 'next/head';
import Header from "../components/Globales/Header"
import { TitleH1 } from "../components/Globales/StyleBase"
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
            <title>Revolution Dance</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
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