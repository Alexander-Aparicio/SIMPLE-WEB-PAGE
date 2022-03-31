
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
    @media (min-width:415px){
        /* margin-top: 8.5vh; */
        min-height:81.5vh;
    }
    @media (min-width:1500px){
        border-left:solid 1px #51515140;
        border-right:solid 1px #51515140;
    }
  }
  main .cornerRight{
    position: absolute;
    top:0;
    left: 0;
    background-color: transparent;
    justify-content: flex-start;
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