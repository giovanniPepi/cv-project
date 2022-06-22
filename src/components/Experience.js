import React, { Component } from "react";
import Textfield from "./Textfield";
import { NoPrint } from "react-easy-print";
import Printwarning from "./PrintWarning";

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
      <NoPrint>
        <Printwarning company={true} />
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

          <label htmlFor="description">
            <p>Description</p>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </label>

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

          <button className="formBtn experienceBtn" type="submit">
            Save
          </button>
          <button
            className="formBtn"
            type="button"
            onClick={() => handleDelete("experienceIds", id)}
          >
            Delete
          </button>
        </form>
      </NoPrint>
    );
  }
}

export default Experience;
