import styled from "styled-components"
import { useRouter } from 'next/router'
import { Volume } from '../comps/SetComps'
import { useState } from 'react';


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

let CocoHead = styled.img`
height: 165px;
width: 200px;
`;

let StarIcon = styled.img`
height: 28px;
width: 28px;
margin-left: 290px;
margin-top: 17px;
bottom: 0;
`;


// // color: ${props=> props.starcl || '#FFF'};
// background-url: ${props=> props.starcl || '/selected_fav'};

let CocoInfo = styled.p`
position: absolute;
padding-bottom: 25px;
padding-left: 15px;
align-self:flex-end;
color:${props => props.txt_cl};
`;

let CocoInfo2 = styled.p`
position: absolute;
padding-bottom: 5px;
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


// function ClickCoco () {
//     const state = changecolor();
// }

export function FavButton() {
    const [img, setImg] = useState("/favorite_button.svg");

    return <StarIcon src={img === false ? '/favorite_button.svg' : '/selected_favebutton.svg'}
        onClick={() => setImg(!img)}
    ></StarIcon>

}

export function Coco() {
    const r = useRouter();

    return <CocoCont>
        <CocoHead src="/cocoicon.svg" onClick={() => r.push('/namepronunciation2')}></CocoHead>
    </CocoCont>
}

export default function PronounciationCont({ w = '330px', h = '250px', subheaderinfo = 'Info', infotxt = 'text', cl = '#5C80BC' }) {
    const r = useRouter();

    const [color, SetColor] = useState(false)

    return <div>
        <BeigeCont widthsize={w} heightsize={h}>
            <CountryName txt_cl={cl}>{subheaderinfo = 'Vietnamese'}</CountryName>

            <FavButton></FavButton>

            <Name txt_cl={'#FC5F6C'}>{subheaderinfo = 'Minh'}</Name>
            <Pronounce>{infotxt = 'm-ing'}</Pronounce>
            <CocoInfo txt_cl={cl}>{infotxt = 'Tap Coco to hear'}</CocoInfo>
            <CocoInfo2 txt_cl={cl}>{infotxt = ' pronounciation'}</CocoInfo2>
            <Coco></Coco>
            {/* <CocoCont>
                <CocoHead src="/cocoicon.svg" onClick={() => r.push('/namepronunciation2')}></CocoHead>
            </CocoCont> */}
        </BeigeCont>

        <BeigeCont widthsize={w} heightsize={h = '110px'}>
            <Subheader txt_cl={cl}>{subheaderinfo = 'Origin of Minh'}</Subheader>
            <Info>{infotxt = 'Region: Hồ Chí Minh'}</Info>
            <Info2>{infotxt = 'Period: 1890-1969'}</Info2>
        </BeigeCont>

        <BeigeCont widthsize={w} heightsize={h = '176px'}>
            <Subheader txt_cl={cl}>{subheaderinfo = 'Meaning of Minh'}</Subheader>
            <Info>{infotxt = 'The meaning of Minh means “bright” and “clever”.'}</Info>
        </BeigeCont>
    </div>
}
