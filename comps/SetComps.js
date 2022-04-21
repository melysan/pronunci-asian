import styled from 'styled-components';
import { Subhead } from './IntroText';

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
)

}

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
    margin='2em'
}
){
    return <div>
        <Wrapper2>
            <SetHead h1margin={margin}>{txt}</SetHead>
            <ItemWrap>
                <Subhead txt='OFF' />
                <Slider type='checkbox' />
                <Subhead txt='ON' />
            </ItemWrap>
        </Wrapper2>

    </div>
}


export function DarkMode (){
    return <div>
        <Wrapper2>
            <Head txt='Dark Mode' />
            <ItemWrap>
                <Subhead txt='OFF' />
                <Slider type='checkbox' />
                <Subhead txt='ON' />
            </ItemWrap>
        </Wrapper2>

    </div>
}

export function TextSize (){
    return <div>
        <Wrapper2>
            <Head txt='Text Size'/>
            <Select>
                <option value='' hidden>
                    Fonts
                </option>
                <option value='1'>Large</option>
                <option value='2'>Medium</option>
                <option value='3'>Smol</option>
            </Select>
        </Wrapper2>

    </div>
}