import React, { Component } from "react";
import Textfield from "./Textfield";
import SaveBtn from "./SaveBtn";
import DeleteBtn from "./DeleteBtn";

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

        <div className="labelAbout">
          <p>Description</p>
          <textarea
            type="text"
            className="textAboutMe"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>

        <div className="btnContainer">
          <button className="formBtn experienceBtn" type="submit">
            <SaveBtn />
          </button>
          <button
            className="formBtn"
            type="button"
            onClick={() => handleDelete("experienceIds", id)}
          >
            <DeleteBtn />
          </button>
        </div>
      </form>
    );
  }
}

export default Experience;
