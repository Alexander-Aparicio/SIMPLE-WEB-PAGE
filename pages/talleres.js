import Head from "next/head";
import LandingPage from "../components/landing/LandingPage";

const talleres = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Talleres gratuitos"></meta>
        <meta name="twitter:title" content="➤Talleres: De Baile"></meta>
        <meta
          name="description"
          content="Talleres de baile gratuitos en lima norte de la academia Revolution Dance Studio."
        />
      </Head>
      <LandingPage />
    </>
  );
};

export default talleres;
