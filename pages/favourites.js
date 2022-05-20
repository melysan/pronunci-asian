import styled from 'styled-components'
import { Head, SetHead, Wrapper, FavRow, PageWrap } from '../comps/SetComps'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'


export default function Favourites(){
    return <PageWrap>
          <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <TopBar />
        <Head txt='Favourites' margin='9em' color='' weight=''/>
        <FavRow where='history_article'/>
        <FavRow topic='Name' article='Minh' img='/name.svg' where='namepronunication'/>
        <FavRow topic='Name' article='Yuki'language='Japanese' where='history'/> 
        <FavRow article='How to read the structure of Vietnamese names' where='history'/>
        <NavBar favebuttoncolor='#FC5F6C'
          favetextcolor='#FC5F6C'/>

    </PageWrap>


}