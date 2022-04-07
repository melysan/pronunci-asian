import styled from 'styled-components';

const NavBarBG = styled.div`
background-color: #F2F5EA;
width: 390px;
height: 100px;
margin-top: 20px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
position: sticky;
display: inline-block;`

const NavBarButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
const NavBarButton = styled.div`
background-color: ${props => props.homebutton_color};
border-radius: 50%;
width: 60px;
height: 60px;
margin-top: 10px;
font-size: 16px;
text-align: center;
color: ${props => props.hometext_color};
// line-height: 30px;
&:hover {
    background-color:#FC5F6C;
}
&:hover {
    color: #FC5F6C;
  }`

const NavBarButton2 = styled.div`
  background-color: ${props => props.namebutton_color};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  color: ${props => props.nametext_color};
  // line-height: 30px;
  &:hover {
      background-color:#FC5F6C;
  }
  &:hover {
      color: #FC5F6C;
    }`

const NavBarButton3 = styled.div`
    background-color: ${props => props.historybutton_color};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    color: ${props => props.historytext_color};
    // line-height: 30px;
    &:hover {
        background-color:#FC5F6C;
    }
    &:hover {
        color: #FC5F6C;
      }`

const NavBarButton4 = styled.div`
      background-color: ${props => props.favebutton_color};
      border-radius: 50%;
      width: 60px;
      height: 60px;
      margin-top: 10px;
      font-size: 16px;
      text-align: center;
      color: ${props => props.favetext_color};
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
    homebuttoncolor = "#373A39",
    namebuttoncolor = "#373A39",
    historybuttoncolor = "#373A39",
    favebuttoncolor = "#373A39",
    hometextcolor = "#373A39",
    nametextcolor = "#373A39",
    historytextcolor = "#373A39",
    favetextcolor = "#373A39",
}) {

    return <NavBarBG>

        <NavBarButtonContainer>
            <NavBarButton 
            homebutton_color={homebuttoncolor}
            hometext_color={hometextcolor}><Icon src="/home.svg" />Home</NavBarButton>

            <NavBarButton2 
            namebutton_color={namebuttoncolor}
            hometext_color={nametextcolor}><Icon src="/nametag.svg" />Names</NavBarButton2>

            <NavBarButton3 
            historybutton_color={historybuttoncolor}
            historytext_color={historytextcolor}><Icon src="/history.svg" />History</NavBarButton3>

            <NavBarButton4 
            favebutton_color={favebuttoncolor}
            favetext_color={favetextcolor}><Icon src="/star.svg" />Favorites</NavBarButton4>
        </NavBarButtonContainer>

    </NavBarBG>

}