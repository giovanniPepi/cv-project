import { mdiContentSaveOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const SaveBtn = () => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiContentSaveOutline,
    color: "blue",
    size: 0.8,
  });

  const { path, color, size, spin } = btnInfo;

  return <Icon path={path} size={size} color={color} spin={spin} />;
};

export default SaveBtn;
