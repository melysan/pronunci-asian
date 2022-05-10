import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from '../comps/NavBar';
import TopBar from '../comps/TopBar';
import SearchBar from '../comps/SearchBar';
import Header from '../comps/Header';
import DetailText from '../comps/DetailText';
import HistoryTopicCard from '../comps/HistoryTopicCard';
import { PageWrap } from '../comps/SetComps';
import { hisPage } from '../data/history_cate_content';


import {useRouter} from 'next/router';

export default function History() {

  return <div>
      <Head>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

      </Head>
      <PageWrap>


        <TopBar
        backto="/homescreen"/>
        <SearchBar/>
        <Header
          h1="Topics"/>
          
        <HistoryTopicCard></HistoryTopicCard>
        
        <HistoryTopicCard
            lang="Japanese"
            flagimg="/JP_FLAG.svg"
            bgimg="/Coco_Japan_Pattern.svg"
            where={
              hisPage[0].route
            }/>

        <HistoryTopicCard
            lang="Korean"
            flagimg="/SK_FLAG.svg"
            bgimg="/Coco_SK_Pattern.svg"
            where="/history_articles"/>

        <HistoryTopicCard
            lang="Vietnamese"
            flagimg="/VN_FLAG.svg"
            bgimg="/Coco_Vietnamese_Pattern.svg"
            where="/history_articles"/>

        {/* <DetailText
        p="Stay tuned for more"/> */}

        <NavBar
          historybuttoncolor='#FC5F6C'
          historytextcolor='#FC5F6C'
       />

      </PageWrap>


    </div>
  
}
