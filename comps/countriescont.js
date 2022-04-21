import styled from 'styled-components'
import { useRouter } from 'next/router'

// let Heading = styled.h1 `color:#5C80BC; font-size: 24px;`;
let BgCont = styled.div`
background-color:${props=>props.cl};
border-radius:21px;
width: 150px; 
height:140px;
justify-content:center;
display:flex;`;

let CocoImg = styled.img`
width: 120px;
height: 130px;
margin:5px;`;

let CountriesName = styled.div`
display: flex;
align-items:center; 
justify-content:center;
&:hover {
    color:#FC5F6C;
}`;

// width: 125px;
// height: 133px;
// left: 42px;
// top: 273px;

// export function Header () {
//     return <Heading>Topics</Heading>
// }

export default function FlagCont({bg='#F2F5EA',img='/Chinese Coco.svg', text='Chinese'}) {
    const r = useRouter();
    return <div>
<BgCont cl={bg}>
        <CocoImg src={img}></CocoImg>
    </BgCont>
    <CountriesName onClick={() => r.push('/namepageresult')}>{text}</CountriesName>
    </div>
}