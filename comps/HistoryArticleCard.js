import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';




const HisArticleCard = styled.div`
margin: 10px;
background-color: #F2F5EA;
border-radius: 24px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
overflow: hidden;
width: 330px;
height: 209px;
&:hover { 
  animation: pulse 1s infinite;
  animation-timing-function: linear;   
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05);
  100% { transform: scale(1); }
  }
}`


const HisArticleImg = styled.img`
width: 100%;
height: 125px;
object-fit: cover;
content:url("${props=>props.article_img}");`

const HisArticleLang = styled.p`
margin-top: 5px;
margin-bottom: -10px;
font-size: 16px;
margin-left: 20px;
color: #5C80BC;`

const HisArticleDesc = styled.p`
font-size: 16px;
margin-left: 20px;
padding-right: 40px;`

const FaveStar = styled.img`
content:url("/favebutton.svg");
float: right;
margin-right: 20px;
margin-top: 20px;
`

const HisArticleText = styled.div`
display: none;`


export function FavButton() {
  const [img, setImg] = useState("/favorite_button.svg");

  return <FaveStar src={img === false ? '/favorite_button.svg' : '/selected_favebutton.svg'}
      onClick={() => setImg(!img)}
  ></FaveStar>
}

export default function HistoryArticleCard({
    text = "Description",
    lang = "Language",
    articleimg = "/Coco_Nguyen.svg",
    articletext = "",
    where = ""
    
}){
  


  
  const r = useRouter();
  const {page,type} = r.query;

return<HisArticleCard >
<HisArticleImg article_img={articleimg}/>
<FavButton/>
  <HisArticleLang>{lang}</HisArticleLang>
  <HisArticleDesc>{text}</HisArticleDesc>
  <HisArticleText>{articletext}</HisArticleText>

</HisArticleCard>

}

