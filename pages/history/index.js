import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import NavBar from '../../comps/NavBar';
import TopBar from '../../comps/TopBar';
import Header from '../../comps/Header';
import HistoryTopicCard from '../../comps/HistoryTopicCard';
import { PageWrap } from '../../comps/SetComps';
import { langList } from "../../data/history_content";


const Index = () => (
  <>
    <Head>
      <title>History</title>
      <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>
    </Head>
    <PageWrap>
        <TopBar
        backto="/homescreen"/>
        <Header
          h1="History Topics"/>

 
      {langList.map((item, index) => (
        <div key={index}>
          <Link as={`history/${item.country}`} href="history/[country]">
            <a>
            <HistoryTopicCard
            lang = {item.country}
            flagimg = {item.flag}
            bgimg = {item.bg}></HistoryTopicCard>
            </a>
          </Link>
        </div>
      ))}



<NavBar
historybuttoncolor='#FC5F6C'
historytextcolor='#FC5F6C'
/>

</PageWrap>
</>
);
export default Index;