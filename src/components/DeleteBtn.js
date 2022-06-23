import { mdiDelete } from "@mdi/js";
import Icon from "@mdi/react";
import { Component } from "react";

class DeleteBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: mdiDelete,
      color: "red",
      size: 1,
      spin: 5,
    };
  }

  render() {
    const { path, color, size, spin } = this.state;

    return <Icon path={path} size={size} color={color} spin={spin} />;
  }
}

export default DeleteBtn;
