import Icon from "@mdi/react";
import { mdiContentSaveOutline, mdiDelete } from "@mdi/js";
import React, { Component } from "react";
import Textfield from "./Textfield";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      company: "",
      position: "",
      description: "",
      from: "",
      to: "",
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
    const { editMode, company, position, description, from, to } = this.state;
    const { id, handleDelete } = this.props;

    if (!editMode) {
      return (
        <Textfield
          company={company}
          position={position}
          description={description}
          from={from}
          to={to}
          handleEdit={this.handleSubmit}
        />
      );
    }

    return (
      <form className="experienceForm" action="" onSubmit={this.handleSubmit}>
        <div className="innerFormDiv">
          <label htmlFor="company">
            <p>Company</p>
            <input
              type="text"
              name="company"
              value={company}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="position">
            <p>Position</p>
            <input
              type="text"
              name="position"
              value={position}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <div className="innerFormDiv">
          <label htmlFor="from">
            <p>From</p>
            <input
              type="date"
              name="from"
              value={from}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="to">
            <p>To</p>
            <input
              type="date"
              name="to"
              value={to}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="innerFormDiv">
          <label htmlFor="description">
            <p>Description</p>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="btnContainer">
          <button className="formBtn experienceBtn" type="submit">
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
            onClick={() => handleDelete("experienceIds", id)}
          >
            <Icon path={mdiDelete} size={0.9} color="#22C55E" spin={10} />
          </button>
        </div>
      </form>
    );
  }
}

export default Experience;
