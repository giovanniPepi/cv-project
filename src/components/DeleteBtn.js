import { mdiDelete } from "@mdi/js";
import Icon from "@mdi/react";
import { Component } from "react";

class DeleteBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: mdiDelete,
      color: "red",
      size: 0.8,
    };
  }

  render() {
    const { path, color, size, spin } = this.state;

    // accepts new sizes
    if (this.props.newSize) {
      return (
        <Icon path={path} size={this.props.newSize} color={color} spin={spin} />
      );
    } else {
      return <Icon path={path} size={size} color={color} spin={spin} />;
    }
  }
}

export default DeleteBtn;
