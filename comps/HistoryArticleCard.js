import styled from 'styled-components';
import { useRouter } from 'next/router';

const HisArticleCard = styled.div`
margin: 10px;
background-color: #F2F5EA;
border-radius: 24px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
overflow: hidden;
width: 330px;
height: 209px;`


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

export default function HistoryArticleCard({
    text = "Description",
    lang = "Language",
    articleimg = "/Coco_Nguyen.svg",
    where = "/history"
    
}){
  
  const r = useRouter();
  const {page,type} = r.query;

return<HisArticleCard onClick={() => r.push(where)}>
<HisArticleImg article_img={articleimg}/>
<FaveStar/>
  <HisArticleLang>{lang}</HisArticleLang>
  <HisArticleDesc>{text}</HisArticleDesc>

</HisArticleCard>

}

