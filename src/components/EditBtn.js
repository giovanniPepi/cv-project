import { mdiPencilOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const EditBtn = () => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiPencilOutline,
    color: "purple",
    size: 0.8,
  });

  const { path, color, size, spin } = btnInfo;

  return <Icon path={path} size={size} color={color} spin={spin} />;
};

export default EditBtn;
