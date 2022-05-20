import styled from 'styled-components'
import { useRouter } from 'next/router'
import { FavButton } from '../comps/pronunicationcont.js'

let NameCardBg = styled.div`
width: 330px;
height: 120px;
background-color: rgba(242, 245, 234, 1);
border-radius : 18px;
border-top: 20px solid rgba(252, 95, 108, 1);
margin: 30px;
padding: 7px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
display:flex;
`;

let CountryHeading = styled.h2`
color: ${props => props.countryheading_color};
font-weight: normal;
font-size: 14px;
position: absolute;
margin-top: -5px;
padding: 5px;
`;

let Name = styled.h1`
font-size: 24px;
font-weight: normal;
color: #000;
margin-top: 5px;
z-index: 1;
`;

let Fav = styled.img`
width: 28px;
height: 28px;
margin-left: 280px;
margin-top: 25px;
`;

export default function NameCard({ colorheading = '#5C80BC', country_txt = 'country', txtname = 'Name', ind, txt='hi'}) {
    const r = useRouter();

    var { item, page } = r.query;

    if (item === undefined) {
      item = 0;
    }

    
    return <div>
        <NameCardBg onClick={() => r.push( {pathname:'/namepronunication', query: {page:page, index:ind} })} >  
            <FavButton></FavButton>
            <CountryHeading countryheading_color={colorheading}>{country_txt}
                <Name>{txtname}</Name>
            </CountryHeading>
        </NameCardBg>

        {/* <NameCardBg onClick={() => r.push( {pathname:'/namepronunic =]ation', query: { item: Number(item) + 2 }
        })}>
            <FavButton></FavButton>
            <CountryHeading countryheading_color={colorheading}>{country_txt = VietName[item].Lang}
                <Name>{txtname = VietName[item + 1].Name}</Name>
            </CountryHeading>
        </NameCardBg>
        
        <NameCardBg onClick={() => r.push({pathname:'/namepronunication', query: { item: Number(item) + 3}
        })}>
            <FavButton></FavButton>
            <CountryHeading countryheading_color={colorheading}>{country_txt = VietName[item].Lang}
                <Name>{txtname = VietName[item + 2].Name}</Name>
            </CountryHeading>
        </NameCardBg> */}
   {/* const Idk = ({index}) => {
        return NameCard = {index}
     */}
    {/* } */}
    </div>
}