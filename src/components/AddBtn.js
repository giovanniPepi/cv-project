import { mdiPlusThick } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const AddBtn = () => {
  /* this.state = {
      path: ,
      
    };
   */

  const [btninfo, setBtnInfo] = useState({
    path: mdiPlusThick,
    color: "#22C55E",
    size: 0.8,
  });

  const { path, color, size, spin } = btninfo;

  return <Icon path={path} size={size} color={color} spin={spin} />;
};

export default AddBtn;
