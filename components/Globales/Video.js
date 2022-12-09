import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

const BoxVideo = styled.div`
position:relative;
width:100%;
max-width:400px;
height:250px;
padding-right: 0%;
border-radius:7px;
/* background-color: #FAF5FA; */
/* border: solid 1px #E2DDDD; */
/* padding: 1.2%; */
margin-left: 15px;
margin-right: 15px;
.reproductor{
    /* position:absolute;
    top:0;
    left:0; */
}
`

const Video = ({url, width, height, volumen, className})=>{

    return(
        <ReactPlayer 
        url={url}
        width={width}
        height={height}
        className={className}
        controls
        volume={volumen}
        />
    )
}

export {
    BoxVideo,
    Video
}