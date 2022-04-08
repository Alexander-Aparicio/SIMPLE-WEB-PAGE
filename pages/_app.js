import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import * as fbq from '../lib/fpixel'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Caveat', cursive;
    src: url('../public/fonts/Caveat/static/Caveat-Bold.ttf');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  *{margin: 0; padding: 0;}
  html{box-sizing: border-box; scroll-behavior: smooth; font-size: 10px;}
  *,*::after, *::before{box-sizing: inherit; -webkit-tap-highlight-color: rgba(0,0,0,0);}
  a{text-decoration: none;}
  button,input,select{border-style: none; outline: inherit;}
  button,select,input[type="submit"]{cursor: pointer;}
  header,main,footer{width: 100%;}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  main{
    width: 100%;
    max-width:1600px;
    margin:auto;
    margin-top: 0px;
    background-color:#fff;
    display:block;
    padding-bottom:50px;
    position: relative;
    @media (min-width:415px){
        /* margin-top: 8.5vh; */
        min-height:81.5vh;
    }
    @media (min-width:1500px){
        border-left:solid 1px #0002;
        border-right:solid 1px #0002;
    }
  }
  main .cornerRight{
    position: absolute;
    top:0;
    left: 0;
    width: 15%;
    z-index: 1;
    background-color: transparent;
    justify-content: flex-start;
    padding: 0px;
    @media (min-width:415px){
      width: 10%;
    }
  }
`
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {

    fbq.pageview()

    const handleRouteChange = (url) => {
      gtag.pageview(url)
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}