import { mdiContentSaveOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Component } from "react";

class SaveBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: mdiContentSaveOutline,
      color: "blue",
      size: 1,
      spin: 2,
    };
  }

  render() {
    const { path, color, size, spin } = this.state;

    return <Icon path={path} size={size} color={color} spin={spin} />;
  }
}

export default SaveBtn;
