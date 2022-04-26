import styled from 'styled-components'
import { Head, SetHead, Wrapper, FavRow, PageWrap } from '../comps/SetComps'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'


export default function Favourites(){
    return <PageWrap>
  
        <TopBar />
        <Head txt='Favourites' margin='9em' color='' weight=''/>
        <FavRow />
        <FavRow topic='Name' article='Minh' img='/name.svg'/>
        <FavRow topic='Name' article='Yuki'language='Japanese' /> 
        <FavRow article='How to read the structure of Vietnamese names'/>
        <NavBar />

    </PageWrap>


}