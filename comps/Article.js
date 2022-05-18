import styled from 'styled-components';

const ArticleHeading = styled.h1`
font-size: 24px;
color: #5C80BC;
display: flex;
justify-content: center;
margin: 1% 10% 3% 10%; 
`

const Language = styled.p`
font-size: 14px;
color: #5C80BC;
display: flex;
justify-content: center;
margin: 1% 0% 1% 0%;
`

const ArticleText = styled.p`
font-size: 18px;
line-height: 2;
display: flex;
justify-content: center;
margin: 1% 10% 30% 10%;
`

const ArticleCont = styled.div`
margin: 10px;
display:flex;
flex-direction: column;
`

const ArticleImg = styled.img`
background-color: #ffffff;
width: 100vw;
height: 300px;
content:url("${props=>props.article_img}");
`
const FaveStar = styled.img`
content:url("/favebutton.svg");
width: 30px;
display: flex;
justify-content: flex-start;
margin-left: 85%;
`

export default function Article({
    articletitle="Heading",
    articlelang="Vietnamese",
    articleimg="/Coco_Nguyen.svg",
    articletext="Text"
}){

return <ArticleCont><ArticleImg article_img={articleimg}/>
<Language>{articlelang}</Language>
<ArticleHeading>{articletitle}</ArticleHeading>
<ArticleText>{articletext}</ArticleText>
</ArticleCont>

}