import styled from "styled-components"

const Encabezado = styled.header`
    width: 100%;
    max-width:1600px;
    margin:auto;
    height: 10vh;
    max-height:76px;
    display:flex;
    justify-content:space-between;
    background-color:transparent;
    border-bottom: solid 1px #f4f4f424;
    padding-left:5%;
    padding-right:5%;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index: 99999;
    @media (min-width:415px){
        background-color:rgba(118, 0, 120, 0.04);
        position: sticky;
    }
`
const Figure = styled.figure`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items:center;
    margin-top: 6px;
    max-height: 9vh;
    img{
        width: 40px;
    }
    figcaption{
        font-size:20px;
        color: #fff;
        margin-top: 5px;
        font-family: 'Caveat', cursive;
        font-weight:bold;
        margin-left:15px;
    }
    figcaption p{
        line-height: 0;
    }
    @media (min-width:415px){
        figcaption{
            color: #000;
        }
    }
`

const Navbar = styled.nav`
    display:none;
    flex-wrap:wrap;
    align-items:center;
    justify-content: space-around;
    width: 50%;
    @media (min-width:600px){
        display: flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content: space-around;
        width: 60%;
    }
    @media (min-width:830px){
        width: 50%;
    }
`
const OptionMenu = styled.p`
    font-size: 1.7rem;
    cursor:pointer;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 500 ;
    a{
        color: #000;
        font-family: 'Poppins', sans-serif;
        &:hover{
            color: #CD55BA;
        }
    }
    & .seleccionado{
        color: #CD55BA !important;
    }
`

export {
    Encabezado,
    Figure,
    Navbar,
    OptionMenu
}