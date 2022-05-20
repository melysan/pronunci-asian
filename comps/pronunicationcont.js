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
dislay:${props => props.display || 'flex'}
height: 130px;
justify-content: flex-end;
margin-left: 145px;
margin-top: 60px;
width: 130px;
&:hover { 
    animation: pulse 1s infinite;
    animation-timing-function: linear;   
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05);
    100% { transform: scale(1); }
    }
  }
`;

let CocoHead = styled.img`
height: 100px;
width: 200px;
margin-bottom: 25px;
align-items: center;
`;

let Cont = styled.div`
&:hover {
    background-color:#F05F6D;
}`;


let Redcircle = styled.div`
width: 135px;
border-radius: 50%; 
background-color: #FC5F6C;
dislay: flex;
height: 135px;
align-items: center;
margin-top: -145px;
margin-left: 32px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;`;

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
height: 0px;
margin-bottom:  0px;
color:${props => props.txt_cl};
`;

let Info2 = styled.p`
font-size: 16px;
display: flex;
padding-top: 10px;
padding-right: 50px;
margin: 9px;
margin-left: 12px;
color:${props => props.txt_cl};
`;


// function ClickCoco () {
//     const state = changecolor();
// }

const switch_data = {
    active: {
      display:'flex'
    },
    inactive: {
      display:'none'
    }
  }
  

export function FavButton() {
    const [img, setImg] = useState("/favebutton.svg");

    return <StarIcon src={img ? '/favebutton.svg' : '/selected_favebutton.svg'}
        onClick={() => setImg(img ? false : true)}
    ></StarIcon>
}



// export function Coco({ind}) {
//     const r = useRouter();
//     var {page} = r.query;

//     const [active, setActive] = useState(active ? 'active' : 'inactive');

//     return <CocoCont >
//         <CocoHead src="/New_Coco_Head.svg" onClick={() => r.push({pathname:'/pronunciationresult', query:{page:page, index:ind}})}></CocoHead>
//             <Redcircle></Redcircle>
//     </CocoCont>
// }


export function Coco() {
    const r = useRouter();
    var {page, index} = r.query;

    return <CocoCont >
        <CocoHead src="/New_Coco_Head.svg" onClick={() => r.push({pathname:'/pronunciationresult', query:{page:page, index:index}})}></CocoHead>
            <Redcircle></Redcircle>
    </CocoCont>
}


export default function PronounciationCont({ 
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
}) 
{


    return <div>
        <BeigeCont widthsize={w} heightsize={h} >
            <CountryName txt_cl={cl}>{countryname}</CountryName>

            <FavButton></FavButton>

            <Name txt_cl={'#FC5F6C'}> {nametxt}</Name>
            <Pronounce>{pronunciation}</Pronounce>
            <CocoInfo txt_cl={cl}>{infotxt = 'Tap Coco to hear'}</CocoInfo>
            <CocoInfo2 txt_cl={cl}>{infotxt = ' pronounciation'}</CocoInfo2>
            <Coco></Coco>
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

