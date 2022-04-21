import { Head, Subhead, Parag, Color } from '../comps/IntroText';
import { Logo  } from '../comps/MainLogo'
import { RedButton } from '../comps/landingbuttons';

export default function IntroPage (){
    return <div className='cont'>
        <Head txt='Welcome to Pronunci-Asian!' ></Head>
        <Logo img='/welcomebunny1.svg' />
        <Subhead txt='Hi, I’m Coco!' />
        <Parag txt='Are you ready to hop to it?
                Our app is designed to be the go-to resource for 
                those who want to learn 
                how to pronounce Asian names and
                learn interesting history about them!' />
        <RedButton heading='Next' where='/splashpage'/>
        <RedButton heading='Skip' />
    </div>
}