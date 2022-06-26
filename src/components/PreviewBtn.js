import { mdiPrinterEye } from "@mdi/js";
import Icon from "@mdi/react";
import { Component } from "react";

class PreviewBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: mdiPrinterEye,
      color: "orange",
      size: 2,
    };
  }

  render() {
    const { path, color, size, spin } = this.state;

    return <Icon path={path} size={size} color={color} spin={spin} />;
  }
}

export default PreviewBtn;
