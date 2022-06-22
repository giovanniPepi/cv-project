import React, { Component } from "react";
import Textfield from "./Textfield";
import { NoPrint } from "react-easy-print";
import Printwarning from "./PrintWarning";

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
      <NoPrint>
        <Printwarning institution={true} />
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

          <button className="formBtn">Save</button>
          <button
            className="formBtn"
            type="button"
            onClick={() => handleDelete("educationIds", id)}
          >
            Delete
          </button>
        </form>
      </NoPrint>
    );
  }
}

export default Education;
