import Document, {Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { FB_PIXEL_ID } from '../lib/fpixel'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(){
    return (
      <Html lang="es">
          <Head>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-PK1QEKDLQ0" />
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PK1QEKDLQ0');
            `,
          }} />
          <meta name="author" content="Roke Web"></meta>
          <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
          <meta name="theme-color" content="#282C34"></meta>
          <meta property="og:locale" content="es_PE"></meta>
          <link rel="icon" href="/dance_revolution.ico" />
          <link rel="apple-touch-icon" href="/dance_revolution.ico"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Poppins:wght@400;500;700&display=swap"/>
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  );
  }
}