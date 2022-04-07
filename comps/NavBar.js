import styled from 'styled-components';

const NavBarBG = styled.div`
background-color: #F2F5EA;
width: 390px;
height: 100px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
display: inline-block;`

const NavBarButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
const NavBarButton = styled.div`
background-color: #373A39;
border-radius: 50%;
width: 60px;
height: 60px;
margin-top: 10px;
font-size: 16px;
text-align: center;
color: #373A39;
// line-height: 30px;
&:hover {
    background-color:#FC5F6C;
}
&:hover {
    color: #FC5F6C;
  }`

const Icon = styled.img`
margin-top: 5px;
`

const NameContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
const NavBarName = styled.div`
font-size: 16px;
line-height: 23px;
text-align: center;
color: #373A39;
&:hover {
    color: #FC5F6C;
  }`

export default function NavBar({
}){

return <NavBarBG>

<NavBarButtonContainer>
    <NavBarButton><Icon src="/home.svg"/>Home</NavBarButton>
    <NavBarButton><Icon src="/nametag.svg"/>Names</NavBarButton>
    <NavBarButton><Icon src="/history.svg"/>History</NavBarButton>
    <NavBarButton><Icon src="/star.svg"/>Favorites</NavBarButton>
    </NavBarButtonContainer>

</NavBarBG>

}