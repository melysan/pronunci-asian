import styled from 'styled-components'
import { Head, SetHead, Wrapper } from '../comps/SetComps'



export default function Favourites(){
    return <div className='cont'>
        <Head txt='Favourites' margin='9em' color='' weight=''/>
        <Wrapper>
            <Head txt='History' weight='300' color='#FC5F6C'size='14px' />
            <Head txt='Vietnamese' weight='300' size='14px' /> 
            <Head txt='Why is the last name Nguyễn so popular?' weight='300' size='16px' color='black' />
        </Wrapper>
    </div>

}