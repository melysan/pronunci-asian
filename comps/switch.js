import styled from 'styled-components'
import { useState } from 'react';



const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
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
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

function ToggleSwitch({
    toggleTheme
})
{
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
    console.log(e);
    toggleTheme();
  };

  return (
    <Label>
      <span>Toggle is {checked ? "on" : "off"}</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};

export default ToggleSwitch;


// export function Toggle2({
// }) {
//   return (
//     <div>
//       <ToggleSwitch />
//     </div>
//   );
// }


