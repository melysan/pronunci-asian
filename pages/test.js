import ToggleFav from "../comps/favorite_button";
import React, { useState } from "react";

export default function App() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

    return <div>
        <ToggleFav src={active} handleChangeActive={handleChangeActive}></ToggleFav>
        </div>
}