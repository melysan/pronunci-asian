import styled from 'styled-components';
import { Subhead } from './IntroText';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export const SetHead = styled.h1`
    font-size: ${props => props.fontSize || '24px'};
    color: ${props => props.headColor || "#5C80BC"};
    display: flex;
    margin-right: ${props => props.h1margin};
    font-weight: ${props => props.h1Weight || 'bold'}
`;

const SetSub = styled(SetHead)`
    color: #FC5F6C;
    margin-right: 9.2em;
`;

const Slider = styled.input`

`;

export const Wrapper = styled.div`
    width: 388px;
    height: 60px;
    margin: 0.2em;
    // background-color: red;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`

const VolumeWrap = styled(Wrapper)`
    margin-bottom: 5em;

`;

const Img = styled.img`
    height: 2em;    
    margin: 1.5em;
`

const Img2 = styled(Img)`
    height: 2.5em;
`;

const ItemWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper2 = styled(Wrapper)`
    justify-content: space-around;
`
const Select = styled.select`
    height: 23px;
    background: #F2F5EA;
    color: Black;
    font-size: 16px;
    font-weight: 600;
    border: none;
    margin-left: 10px;

    option {
        color: black;
        font-weight: 400;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }

`

const FavWrapper = styled.div`
    margin: 1em;
    width: 247px;
`;

const FavWrapper2 = styled.div`
    width: auto;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-around ;
    align-items: center;
`;

const FavImg = styled.div`
    margin: 1em;
    background-color: #F2F5EA;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    cursor: pointer;
`
export const PageWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const PageWrap2 = styled(PageWrap)`
    margin-top: 5em;
`;


///////Switch Stuff//////

const Label = styled.label`
  display: flex;
  align-items: center;
//   gap: 10px;
    padding: 20px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 34px;
  height: 14px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    box-shadow: 0px 0.1px 0.3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2);
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 0px;
    background: white;
    transform: translate(0, -50%);
    display: flex;
    alighn-items: center;
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #FF3333;

    &:before {
      transform: translate(15px, -50%);
    }
  }
`;



////////////////////////




export const SwitchCont = styled.div`
    padding: 20px;
`;

export const SwitchBox = styled.div`
    background: ${props => props.bg || '#AAA'}; //active = #CCF, inactice = #CCC
    width: 34px;
    height: 14px;
    display: flex;
    border-radius: 25px;
    align-items: center;
    transition: left 0.3s, background 0.3s;
`;

export const Tog = styled.div`
    background: ${props => props.bg}; //active = #AAF, inactive = #AAA
    box-shadow: 0px 0.1px 0.3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;
    left: ${props => props.left || '0px'}; //active = 50px, inactive 0px;
    transition: left 0.3s, background 0.3s;
`;

const switch_data = {
    active: { 
      boxbg:'#FF3333',
      togglebg: '#FF3333',
      toggleleft: '17px'
    },
    inactive: {
      boxbg:'#CCC',
      togglebg: '#FFFFFF',
      toggleleft: '0px'
    }
  }

export function Head({
    txt='lorem',
    margin='',
    color='',
    weight='',
    size=''
}
){
    return (
    <SetHead h1margin={margin} headColor={color} h1Weight={weight} fontSize={size}>{txt}</SetHead>
)}




// export function Switch({
//     active=false
// }){
//     const [switchState, setSwitch] = useState('inactive');

//     useEffect(()=>{
//         if (active === true){
//             setSwitch('active');
//         } else {
//             setSwitch('inactive');
//         }

//     }, [active]);

//     // useEffect(()=>{
//     //     if(switchState === 'inactive'){
//     //       onChange(false)
//     //     } else {
//     //       onChange(true)
//     //     }
//     //   });
    

//     return <SwitchCont>

    
//         <SwitchBox
//         bg={switch_data[switchState].boxbg}
//         >

//             <Tog
//             bg={switch_data[switchState].togglebg}
//             left={switch_data[switchState].toggleleft}
//             onClick={
//                 () => setSwitch(switchState === 'inactive' ? 'active' : 'inactive')
//             }
//             />

//         </SwitchBox>

//     </SwitchCont>

// }

export function Subhead2({
    txt='lorem'
}){
    return (
        <SetSub>{txt}</SetSub>
    )
}

export function Volume (){
    return <div>
        <VolumeWrap>
        <Img src='/volumedown.svg' />  
            <Slider type='range'></Slider>
        <Img2 src='/volumeup.svg' />

        </VolumeWrap>

    </div>
}

export function Toggle ({
    txt='Sound',
    margin='2em',
    weight='400',
    color='#FC5F6C',
    // active=false,
    toggleTheme,
    onChange = () => {},
}
){

    // const [switchState, setSwitch] = useState('inactive');
    // const [checked, setChecked]
    // useEffect(()=>{
    //     if (active === true){
    //         setSwitch('active');
    //     } else {
    //         setSwitch('inactive');
    //     }

    // }, [true]);

    // useEffect(() => {
    //     if (switchState ==='inactive'){
    //         onChange(false)
    //     } else {
    //         onChange(true)
    //     }
    // })

    // const [checked, setChecked] = useState(() => {
    //     if (typeof window !== 'undefined'){
    //         // console.log('it passes'); 
    //         localStorage.getItem('checked') === 'false' 
        
    //     }
    // });

    const [checked, setChecked] = useState(() =>  false);


    useEffect(() => {
        localStorage.setItem('checked', checked)
    });

    const handleChange = (e) => {
        setChecked(!checked);
        console.log(e);
        // setIsDarkMode();
        toggleTheme();
        // localStorage.setItem('theme', !theme)
    }

    return <div>
        <Wrapper2>
            <SetHead h1margin={margin} h1Weight={weight} headColor={color}>{txt}</SetHead>
            <ItemWrap>
                <Subhead txt='OFF' />
                <Label>
                    {/* <span>Toggle is {checked ? "on" : "off"}</span> */}
                    <Input checked={checked} type="checkbox" onChange={handleChange}/>
                    <Switch />
                </Label>

                <Subhead txt='ON' />
            </ItemWrap>
        </Wrapper2>

    </div>
}


export function DarkMode (){
    return <div>
        <Wrapper2>
            <SetHead txt='Dark Mode' />
            <ItemWrap>
                <Subhead txt='OFF' />
                <Slider type='checkbox' />
                <Subhead txt='ON' />
            </ItemWrap>
        </Wrapper2>

    </div>
}

export function TextSize (
{    txt='Text Size',
    weight='400',
    color='#FC5F6C',
    margin='2.8em'
}){ 
    return <div>
        <Wrapper2>
        <SetHead h1Weight={weight} h1margin={margin} headColor={color}>{txt}</SetHead>
            <Select>
                <option value='' hidden>
                     Large
                </option>
                <option value='1'>Large</option>
                <option value='2'>Medium</option>
                <option value='3'>Smol</option>
            </Select>
        </Wrapper2>

    </div>
}
export function FontType (
    {txt='Font Type',
    weight='400',
    color='#FC5F6C',
    margin='1em'
}
){
    return <div>
        <Wrapper2>
        <SetHead h1Weight={weight} h1margin={margin} headColor={color}>{txt}</SetHead>
            <Select>
                <option value='' hidden>
                    Sans Serif
                </option>
                <option value='1'>Sans Serif</option>
                <option value='2'>Serif</option>
                <option value='3'>Comic Sans</option>
            </Select>
        </Wrapper2>

    </div>
}

export function FavRow ({
    topic='History',
    language='Vietnamese',
    article='Why is the last name Nguyễn so popular?',
    img='/Vector.svg',
    where='/'
}) {

    const r = useRouter();

    return <FavWrapper2>
        <FavImg
        onClick={
            () => r.push(where)
        }
        >
            <img src={img} />
        </FavImg>
        
        <FavWrapper>
            <Head txt={topic} weight='300' color='#FC5F6C'size='14px' />
            <Head txt={language} weight='300' size='14px' /> 
            <Head txt={article} weight='300' size='16px' color='black' />
        </FavWrapper>

    </FavWrapper2>
}

export function WrapPage() {
    return <PageWrap>

    </PageWrap>
}