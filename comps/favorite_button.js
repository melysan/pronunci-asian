import styled from 'styled-components'

let Active = styled.img``;
let Inactive = styled.img ``;

export default function ToggleFav() {
    return <div>
        <Active src = '/selected_favebutton.svg'></Active>
        <Inactive src='/favorite_button.svg'></Inactive>
    </div>
}






