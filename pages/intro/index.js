import { Head, Subhead, Parag, Color } from '../../comps/IntroText';
import { Logo  } from '../../comps/MainLogo'
import { RedButton } from '../../comps/landingbuttons';
import { WrapPage, PageWrap, PageWrap2 } from '../../comps/SetComps';
import { logo } from '../../data/images'
import { name, sub, intro, bold } from '../../data/intro_data'

import { useRouter } from 'next/router';

export default function IntroPage (){

    const r = useRouter();
    var { page } = r.query;

    if ( page === undefined  ){
        page = 0;
    }

    return <PageWrap2>
    <style>@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap');</style>

        <Head txt={name[page].head} ></Head>
        <Logo img={logo[page].bunny} />
        <Subhead txt={intro[page].coco} />
        <Parag txt={sub[page].subhead} />
        <Subhead txt={bold[page].text} ></Subhead>

        {
            
            Number(page) < logo.length -1 &&

            <RedButton heading='Next' where={
                {
                    pathname: '/intro',
                    query:{
                        page:Number(page) + 1 > logo.length-1 ? logo.length-1 : Number(page)+1
                    }
                }
            } />
        } 

        {

        Number(page) < logo.length -1 &&

        <RedButton heading='Skip' where={{
            pathname: '/homescreen',
            query:{
                page:Number(page) + 1 > logo.length-1 ? logo.length-1 : Number(page)+1
            }
        }}/>
        }

        {
            Number(page) >= logo.length-1 &&

            <RedButton heading='Get Started' where='/homescreen' />
        }
    </PageWrap2>
}