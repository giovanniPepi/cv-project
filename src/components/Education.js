import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      school: "",
      position: "",
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
    const { editMode, school, position, from, to } = this.state;
    const { id, handleDelete } = this.props;

    if (!editMode) {
      // print logic
    }

    return (
      <form className="educationForm" action="" onSubmit={this.handleSubmit}>
        <div className="innerFormDiv">
          <label htmlFor="school">
            <p>school</p>
            <input
              type="text"
              name="school"
              value={school}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="position">
            <p>Description</p>
            <input
              type="text"
              name="position"
              value={position}
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
    );
  }
}

export default Education;
