import { mdiDelete } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const DeleteBtn = (newSize) => {
  /*   this.state = {
      path: mdiDelete,
      color: "red",
      size: 0.8,
    };
   */

  const [btnInfo, setBtnInfo] = useState({
    path: mdiDelete,
    color: "red",
    size: 0.8,
  });

  const { path, color, size, spin } = btnInfo;

  // accepts new sizes
  if (btnInfo.newSize) {
    return (
      <Icon path={path} size={this.props.newSize} color={color} spin={spin} />
    );
  } else {
    return <Icon path={path} size={size} color={color} spin={spin} />;
  }
};

export default DeleteBtn;
