import styled from 'styled-components';

const SearchBarBG = styled.div`
background-color: #F2F5EA;
width: 330px; //330px
height: 60px;
border-radius: 47px;
margin: 30px;
display: inline-block;`


const SearchIcon = styled.img`
margin-top: 18px;
margin-right: 30px;
float: right;
`;


export default function SearchBar({
}){

return <SearchBarBG><SearchIcon src="/searchicon.svg" />
</SearchBarBG>

}