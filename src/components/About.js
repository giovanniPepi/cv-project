import { Component } from "react";
import Textfield from "./Textfield";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      aboutMe: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return { editMode: !prevState.editMode };
    });
  }

  render() {
    const { editMode, aboutMe } = this.state;

    if (!editMode) {
      return <Textfield aboutMe={aboutMe} handleEdit={this.handleSubmit} />;
    }

    return (
      <form className="aboutMe" action="" onSubmit={this.handleSubmit}>
        <div className="innerFormDiv">
          <textarea
            className="textAboutMe"
            name="aboutMe"
            placeholder="Something interesting..."
            value={aboutMe}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default About;
