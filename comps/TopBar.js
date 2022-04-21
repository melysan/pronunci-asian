import styled from 'styled-components';

const TopBarBG = styled.div`
background-color: #F2F5EA;
width: 100vw; // 390px
height: 60px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
display: inline-block;
position: sticky;`

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
}){

return <TopBarBG><BackArrowIcon src="/backarrow.svg" /> <SettingsIcon src={cogdisplay} />
</TopBarBG>

}