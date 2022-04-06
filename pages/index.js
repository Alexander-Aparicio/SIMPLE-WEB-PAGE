import Head from 'next/head';
import Header from '../components/Globales/Header';
import { Introduction } from '../components/Home/Introduction';
import Metodologia from '../components/Home/Methodology';
import { Price } from '../components/Home/Price';
import { Schedules } from '../components/Home/Schedules';
import { Slider} from '../components/Home/SliderHome';
import { SampleClass } from '../components/Home/SampleClass';
import { DanceRoom } from '../components/Home/DanceRoom';
import Footer from '../components/Globales/Footer';
import Ubicacion from '../components/Home/Location';
import WhatsApp from '../components/Globales/WhatsApp';
import MenuMobile from '../components/Globales/MenuHamburguesa';
import FrequentQuestions from '../components/Home/FrequentQuestions';

export default function Home() {
  return (<>
    <Head>
      <title>Revolution Dance</title>
      <meta name="Description" CONTENT="Academia de Baile Revolution. Aprende a bailar las coreografías de K-Pop de tus grupos favoritos." />
      {/* <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/> */}
      <link rel="canonical" href="https://"></link>
      <meta property="og:url" content="https://"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Academia de baile Revolution - Kpop"></meta>
      <meta property="og:description" content="Aprende a bailar las mejores coregrafías de tus grupos favoritos de K-pop de tus grupos favoritos."></meta>
      <meta property="og:site_name" content="Academia de baile Revolution"></meta>
      <meta property="og:image" content="https://"></meta>
      <meta property="og:image:secure_url" content=""></meta>
      <meta property="og:image:alt" content="kpop"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:description" content="Aprende a bailar las mejores coregrafías de tus grupos favoritos de K-pop."></meta>
      <meta name="twitter:title" content="➤Academia de baile Revolution"></meta>
      <meta name="twitter:image" content="https://"></meta>

    </Head>

    <Header />

    <main>
      <Slider />
      <Introduction />
      <Metodologia />
      <Schedules />
      <Price />
      <DanceRoom />
      <SampleClass />
      <Ubicacion />
      <FrequentQuestions />
      <WhatsApp />
      <MenuMobile />
    </main>
    <Footer />
    
  </> )
  
}
