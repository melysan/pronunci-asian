import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import HomeCard from '../comps/HomeCard';
import NavBar from '../comps/NavBar';
import TopBar from '../comps/TopBar';
import Header from '../comps/Header';
import { PageWrap } from '../comps/SetComps';

export default function Home() {

  return (
    <PageWrap>
      <Head>
        
        <title>Pronunci-Asian</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>
      </Head>

      <PageWrap>
        <TopBar
        backto="/"/>
        <Header
          h1="Let's start"/>
          
        <HomeCard 
        where="/namepage"/>
        <HomeCard 
        cardbg="#5C80BC"
        verbcolor="#5C80BC"
        heading="History of Asian Names"
        carddescription="Read history lessons on interesting origins of Asian names."
        verb="Read"
        where="/history"/>

        <NavBar
          homebuttoncolor='#FC5F6C'
          hometextcolor='#FC5F6C'
       />

      </PageWrap>

    </PageWrap>
  )
}
