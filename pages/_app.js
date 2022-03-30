
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  html{font-size: 10px;}
  main{
    width: 100%;
    max-width:1600px;
    margin:auto;
    margin-top: 0px;
    background-color:#fff;
    display: ${props => props.flex ? props.flex : 'block'};
    align-items: ${props => props.align ? props.align : ''};
    flex-direction: ${props => props.direction ? props.direction : ''};
    position: ${props=> props.position ? props.position : ''};
    padding-bottom:${props=> props.padding ? props.padding : '50px'};
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