import styled from "styled-components"
import { useRouter } from 'next/router'

let BeigeCont = styled.div`
background-color:#F2F5EA; width:${props => props.widthsize};
height:${props => props.heightsize};
border-radius: 18px;
margin: 15px;
display:flex;
flex-wrap: wrap;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
z-index: -2;`;
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
padding: 0;
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

let CocoHead = styled.img `
align-self: flex-end;
height: 175px;
width: 200px;
margin-left: 170px;
`;

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
z-index: 1;
`;

let Info = styled.p`
padding-top: 35px;
padding-bottom: 35px;
padding-left: 15px;
font-size: 16px;
display: flex;
flex-wrap: wrap;
color:${props => props.txt_cl};
`;

export default function PronounciationCont({ w = '330px', h = '250px', subheaderinfo = 'Info', infotxt='text', cl='#5C80BC' }) {
    const r = useRouter();

    return <div>
        <BeigeCont widthsize={w} heightsize={h}>
        <CountryName txt_cl={cl}>{subheaderinfo = 'Vietnamese'}</CountryName>
            <StarIcon src="/favorite_button.svg"></StarIcon>
            <Name txt_cl={'#FC5F6C'}>{subheaderinfo='Minh'}</Name>
            <Pronounce>{infotxt='m-ing'}</Pronounce>
            <CocoInfo txt_cl={cl}>{infotxt='Tap Coco to hear pronounciation'}</CocoInfo>
            <CocoHead src="/cocoicon.svg" onClick={()=>r.push('/namepronunciation2')}></CocoHead>
        </BeigeCont>

        <BeigeCont widthsize={w} heightsize={h = '102px'}>
            <Subheader txt_cl={cl}>{subheaderinfo = 'Origin of Minh'}</Subheader>
            <Info>{infotxt='Region: Hồ Chí Minh'}</Info>
            <Info>{infotxt='Period: 1890-1969'}</Info>
        </BeigeCont>

        <BeigeCont widthsize={w} heightsize={h = '176px'}>
        <Subheader txt_cl={cl}>{subheaderinfo = 'Meaning of Minh'}</Subheader>
        <Info>{infotxt='The meaning of Minh means “bright” and “clever”.'}</Info>
        </BeigeCont>
    </div>
}