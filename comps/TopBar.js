import styled from 'styled-components';
import { useRouter } from 'next/router';


const TopBarBG = styled.div`
background-color: #F2F5EA;
width: 100vw; // 390px
height: 60px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
display: inline-block;
position: fixed;
top: 0;`

const BackArrowIcon = styled.img`
margin-top: 15px;
margin-left: 25px;
float: left;
`

const SettingsIcon = styled.img`
margin-top: 10px;
margin-right: 20px;
float: right;
`


export default function TopBar({
    cogdisplay = "",
    backto = "/homescreen"
}){

    const r = useRouter();
    const {page,type} = r.query;

return <TopBarBG><BackArrowIcon src="/backarrow.svg" onClick={() => r.push(backto)}/> <SettingsIcon src={cogdisplay} onClick={() => r.push("/settings")}/>
</TopBarBG>

}