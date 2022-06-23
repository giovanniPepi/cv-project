import { mdiPlusThick } from "@mdi/js";
import Icon from "@mdi/react";
import { Component } from "react";

class AddBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: mdiPlusThick,
      color: "#22C55E",
      size: 1,
      spin: 1,
    };
  }

  render() {
    const { path, color, size, spin } = this.state;

    return <Icon path={path} size={size} color={color} spin={spin} />;
  }
}

export default AddBtn;
