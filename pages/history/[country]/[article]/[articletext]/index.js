import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
import styles from '../../../../../styles/Home.module.css';

import NavBar from '../../../../../comps/NavBar';
import TopBar from '../../../../../comps/TopBar';
import Article from '../../../../../comps/Article';
import { PageWrap } from '../../../../../comps/SetComps';


const HistoryResults = () => {
  const router = useRouter();
  const {country, article, articletext} = router.query;

  return (
        <PageWrap>
        <Head><title>History Article</title>
         <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap%27);</style>
      </Head>
        <TopBar
        backto="/history"></TopBar>

       <Article
            articletitle={article}
            articlelang={country}
            articleimg="/Coco_Chalkboard.svg"
            articletext={articletext}
            />

      <NavBar
      historybuttoncolor='#FC5F6C'
      historytextcolor='#FC5F6C'></NavBar>
    </PageWrap>

  );
};

export default HistoryResults;

// this would be article results?