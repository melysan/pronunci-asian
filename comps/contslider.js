import styled from "styled-components"
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import {FavButton} from '../comps/pronunicationcont.js'


let BeigeCont = styled.div`
background-color:#F2F5EA; width:${props => props.widthsize};
height:${props => props.heightsize};
border-radius: 18px;
margin: 15px;
padding: 4px;
padding-top: 0px;
display:flex;
flex-wrap: wrap;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;`;
;

let Name = styled.h2`
color:${props => props.txt_cl};
position: absolute;
padding-left: 15px;
font-size: 40px;
padding-top: 20px;
font-weight: normal;
`;

let Pronounce = styled.h2`
color:${props => props.txt_cl};
position: absolute;
padding-left: 18px;
font-size: 16px;
padding-top: 90px;
font-weight: normal;
`;

let Subheader = styled.h3`
color:${props => props.txt_cl};
margin-right: 0;
font-size: 18px;
position: absolute;
padding-left: 15px;
`;

let CountryName = styled.h3`
color:${props => props.txt_cl};
margin-right: 0;
padding: 0;
position: absolute;
padding-left: 15px;
font-size: 18px;
font-weight: normal;
`;

let CocoCont = styled.div`
dislay:flex;
height: 130px;
justify-content: flex-end;
margin-left: 145px;
`;

// let CocoHead = styled.img`
// height: 165px;
// width: 200px;
// `;

let StarIcon = styled.img`
height: 28px;
width: 28px;
margin-left: 290px;
margin-top: 17px;
bottom: 0;
`;

let CocoInfo = styled.p`
position: absolute;
padding-bottom: 20px;
padding-left: 15px;
align-self:flex-end;
color:${props => props.txt_cl};
`;

let Info = styled.p`
padding-top: 35px;
padding-left: 5px;
font-size: 16px;
display: flex;
flex-wrap: wrap;
margin: 9px;
margin-bottom:  0px;
color:${props => props.txt_cl};
`;

let Info2 = styled.p`
padding-left: 15px;
font-size: 16px;
display: flex;
flex-wrap: wrap;
margin: 0px;
color:${props => props.txt_cl};
`;

let Img = styled.img `width: 30px; margin-left: 2px;`;
let Img2 = styled.img `width: 25px;`;


let SliderCont = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin: 15px;
padding-top: 60px;

`;
const Slider = styled.input`
width: 220px;
align-self-center;
margin: 5px;
margin-top: 10px;
`;

export function Volume (){
    return <SliderCont>
        <Img src='/turtleslow.svg' />  
            <Slider type='range'></Slider>
        <Img2 src='/fastbunny.svg' />
        </SliderCont>
}

export function Coco() {
    const r = useRouter();

    return <CocoCont>
    <CocoHead src="/cocoicon.svg" onClick={() => r.push('/namepronunciation2')}></CocoHead>
</CocoCont>
}

export default function PronounciationContSlider({ 
    w = '330px',
    h = '250px',
    countryname = 'country',
    subheaderinfo = 'Info',
    nametxt = 'name',
    infotxt = 'text',
    cl = '#5C80BC',
    meaning='this is the meaning',
    origin='Origin', 
    period='period',
    pronunciation='slay',
    ind
    }) 
    {
        
    const r = useRouter();

return <div>
<BeigeCont widthsize={w} heightsize={h} >
    <CountryName txt_cl={cl}>{countryname}</CountryName>

    <FavButton></FavButton>
    <Name txt_cl={'#FC5F6C'}>{nametxt}<Img src="/volumeup.svg"></Img></Name>    <Pronounce>{pronunciation}</Pronounce>
    <Pronounce>{pronunciation}</Pronounce>
    <Volume></Volume>
</BeigeCont>

<BeigeCont widthsize={w} heightsize={h = '110px'}>
    <Subheader txt_cl={cl}>{subheaderinfo = 'Origin of'} {nametxt}</Subheader>
    <Info>{origin}</Info>
    <Info2>{period}</Info2>
</BeigeCont>

<BeigeCont widthsize={w} heightsize={h = '176px'}>
    <Subheader txt_cl={cl}>{subheaderinfo = 'Meaning of'} {nametxt} </Subheader>
    <Info>{meaning}</Info>
</BeigeCont>
</div>
}
