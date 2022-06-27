import { mdiPrinterEye } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const PreviewBtn = () => {
  const [btnInfo, setBtnInfo] = useState({
    path: mdiPrinterEye,
    color: "orange",
    size: 2,
  });

  const { path, color, size, spin } = btnInfo;

  return <Icon path={path} size={size} color={color} spin={spin} />;
};

export default PreviewBtn;
