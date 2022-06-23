import Icon from "@mdi/react";
import React, { Component } from "react";
import Textfield from "./Textfield";
import { mdiContentSaveOutline, mdiDelete } from "@mdi/js";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      skill: "",
      description: "",
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
    const { editMode, skill, description } = this.state; //destructuring
    const { id, handleDelete } = this.props; // receives from App

    // text returned when input is saved
    if (!editMode) {
      return (
        <Textfield
          skill={skill}
          description={description}
          handleEdit={this.handleSubmit}
        />
      );
    }

    return (
      <form className="skillForm" action="" onSubmit={this.handleSubmit}>
        <div className="innerFormDiv">
          <label htmlFor="skill">
            <p>Skill</p>
            <input
              type="text"
              name="skill"
              value={skill}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="description">
            <p>Description</p>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="btnContainer">
          {" "}
          <button className="formBtn skillsBtn" type="submit">
            <Icon
              path={mdiContentSaveOutline}
              size={0.9}
              color="#22C55E"
              spin={10}
            />
          </button>
          <button
            className="formBtn"
            type="button"
            onClick={() => handleDelete("skillsIds", id)}
          >
            <Icon path={mdiDelete} size={0.9} color="#22C55E" spin={10} />
          </button>
        </div>
      </form>
    );
  }
}

export default Skills;
