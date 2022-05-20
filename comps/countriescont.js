import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link  from 'next/link'
// let Heading = styled.h1 `color:#5C80BC; font-size: 24px;`;

let Cont = styled.div` 
&:hover {
    color:#FC5F6C;
}`; 

let BgCont = styled.div`
background-color:${props=>props.cl};
border-radius:21px;
width: 150px; 
height:140px;
justify-content:center;
display:flex;`

let CocoImg = styled.img`
width: 120px;
height: 130px;
margin:5px;`;

let CountriesName = styled.div`
display: flex;
align-items:center; 
justify-content:center;`;

export default function FlagCont({bg='#F2F5EA',img='/Chinese Coco.svg', text='Chinese'}) {
const r = useRouter();
const {page} = r.query;

    return <Cont onClick={()=>r.push({pathname:'/namepageresult', query: {page:text
         }})}>
<BgCont cl={bg}> 
        <CocoImg src={img}></CocoImg>
    </BgCont>
    <CountriesName>{text}</CountriesName>
    </Cont>
    
}