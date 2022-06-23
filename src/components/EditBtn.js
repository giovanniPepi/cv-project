import { mdiPencilOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Component } from "react";

class EditBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: mdiPencilOutline,
      color: "purple",
      size: 1,
      spin: 10,
    };
  }

  render() {
    const { path, color, size, spin } = this.state;

    return <Icon path={path} size={size} color={color} spin={spin} />;
  }
}

export default EditBtn;
