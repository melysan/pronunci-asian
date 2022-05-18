import styled from 'styled-components';
import { useRouter } from 'next/router';


const HisTopicCard = styled.div`
width: 330px;
height: 80px;
border-radius: 24px;
background-color: #5C80BC;
margin-bottom: 20px;`

const HisTopicBG = styled.img`
width: 330px;
height: 80px;
object-fit: cover;
border-radius: 24px;
opacity: 10%;
content:url("${props=>props.bg_img}");
position: absolute;
z-index: 0;`

const HisTopicBox = styled.div`
background-color: #FFFFFF;
width: 120px;
height: 30px;
border-radius: 24px;
display: flex;
justify-content: center; /* align horizontal */
align-items: center; /* align vertical */
position: relative;
left: 10%;
bottom: 20%;
`

const Topic = styled.h2`
color: ${props=>props.topic_color};
font-size:16px;
font-weight: bold;`

const Flag = styled.img`
position: relative;
left: 65%;
top: 20%;
content:url("${props=>props.flag_img}");
`

export default function HistoryTopicCard({
    topiccolor="#5C80BC",
    lang="Chinese",
    flagimg="/CH_FLAG.svg",
    bgimg="/Coco_China_Pattern.svg",
    where=""
    
}){
    const r = useRouter();
    const {page,type} = r.query;

return <HisTopicCard >
    <HisTopicBG bg_img={bgimg}/><Flag flag_img={flagimg}/>
    <HisTopicBox><Topic topic_color={topiccolor}>{lang}</Topic></HisTopicBox>
</HisTopicCard>

}