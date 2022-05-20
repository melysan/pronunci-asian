import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
import styles from '../../../styles/Home.module.css';

import NavBar from '../../../comps/NavBar';
import TopBar from '../../../comps/TopBar';
import Header from '../../../comps/Header';
import HistoryArticleCard from '../../../comps/HistoryArticleCard';
import { PageWrap } from '../../../comps/SetComps';
import {langListChinese, langListJapanese, langListKorean, langListVietnamese} from "../../../data/history_content";

const HistoryItem = () => {
  const router = useRouter();
  const { country } = router.query;

  return (    
    <PageWrap>
        <Head><title>History Topics</title>
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>
        </Head>
        <TopBar
        backto="/history"></TopBar>
      <Header
      h1={country}></Header>

   {(country === "Chinese") && langListChinese.map((item, index) => (
        <div key={index}>
          <Link as={`${item.country}/${item.article}/${item.articletext}`} href="[country]/[article]/[articletext]">
            <a>
            <HistoryArticleCard
            text = {item.article}
            lang = {item.country}
            articleimg = {item.articleimg}
            articletext = {item.articletext}>
            </HistoryArticleCard>
            </a>
          </Link>
        </div>
      ))}
      
      {(country === "Japanese") && langListJapanese.map((item, index) => (
        <div key={index}>
            <Link as={`${item.country}/${item.article}/${item.articletext}`} href="[country]/[article]/[articletext]">
            <a>
            <HistoryArticleCard
            text = {item.article}
            lang = {item.country}
            articleimg = {item.articleimg}
            articletext = {item.articletext}>
            </HistoryArticleCard>
            </a>
          </Link>
        </div>
      ))}

{(country === "Korean") && langListKorean.map((item, index) => (
        <div key={index}>
            <Link as={`${item.country}/${item.article}/${item.articletext}`} href="[country]/[article]/[articletext]">
            <a>
            <HistoryArticleCard
            text = {item.article}
            lang = {item.country}
            articleimg = {item.articleimg}
            articletext = {item.articletext}>
            </HistoryArticleCard>
            </a>
          </Link>
        </div>
      ))}

{(country === "Vietnamese") && langListVietnamese.map((item, index) => (
        <div key={index}>
            <Link as={`${item.country}/${item.article}/${item.articletext}`} href="[country]/[article]/[articletext]">
            <a>
            <HistoryArticleCard
            text = {item.article}
            lang = {item.country}
            articleimg = {item.articleimg}
            articletext = {item.articletext}>
            </HistoryArticleCard>
            </a>
          </Link>
        </div>
      ))}

     <NavBar
     historybuttoncolor='#FC5F6C'
     historytextcolor='#FC5F6C'></NavBar>
    </PageWrap>
  );
};
// show all x lang topic cards in here?
export default HistoryItem;