import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiContentSaveOutline, mdiDelete } from "@mdi/js";
import Textfield from "./Textfield";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      title: "",
      institution: "",
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
    const { editMode, title, institution, from, to } = this.state;
    const { id, handleDelete } = this.props;

    if (!editMode) {
      return (
        <Textfield
          title={title}
          institution={institution}
          from={from}
          to={to}
          handleEdit={this.handleSubmit}
        />
      );
    }

    return (
      <form className="educationForm" action="" onSubmit={this.handleSubmit}>
        <div className="innerFormDiv">
          <label htmlFor="title">
            <p>Degree</p>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="institution">
            <p>Institution</p>
            <input
              type="text"
              name="institution"
              value={institution}
              onChange={this.handleChange}
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
        <div className="btnContainer">
          <button className="formBtn">
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
            onClick={() => handleDelete("educationIds", id)}
          >
            <Icon path={mdiDelete} size={0.9} color="#22C55E" spin={10} />
          </button>
        </div>
      </form>
    );
  }
}

export default Education;
