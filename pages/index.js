import Head from 'next/head';
import { Main } from '../components/Globales/StyleBase';
import Header from '../components/Globales/Header';
import { Introduction } from '../components/Home/Introduction';
import Metodologia from '../components/Home/Methodology';
import { Price } from '../components/Home/Price';
import { Schedules } from '../components/Home/Schedules';
import { Slider} from '../components/Home/SliderHome';
import MediosDePago from '../components/Home/PaymentMethods';
import { SampleClass } from '../components/Home/SampleClass';
import { DanceRoom } from '../components/Home/DanceRoom';

export default function Home() {
  return (<>
    <Head>
        <title>Revolution Dance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Poppins:wght@400;500;700&display=swap"/>
    </Head>

    <Header />

    <main>
      <Slider />
      <Introduction />
      <Metodologia />
      {/* <SliderTwo /> */}
      <Schedules />
      <Price />
      <MediosDePago />
      <SampleClass />
      <DanceRoom />
    </main>
    
  </> )
  
}




      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}