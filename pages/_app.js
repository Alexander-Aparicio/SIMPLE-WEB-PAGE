
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
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}