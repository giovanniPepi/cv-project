import React, { Component } from "react";
import Textfield from "./Textfield";
import Icon from "@mdi/react";
import { mdiContentSaveOutline, mdiDelete } from "@mdi/js";
import About from "./About";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
    };

    // binds this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target; // enable editing, updates state to reflect input
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault(); // prevents page reloading
    this.setState((prevState) => {
      return { editMode: !prevState.editMode }; // inverts the prevState
    });
  }

  render() {
    const { editMode, firstName, lastName, email, phone, github, linkedin } =
      this.state; // destructuring the state

    // constructed when edit mode off
    if (!editMode) {
      return (
        <Textfield
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          github={github}
          linkedin={linkedin}
          handleEdit={this.handleSubmit}
        />
      );
    }

    // constructed when edit mode is on
    return (
      <form className="personalForm" action="" onSubmit={this.handleSubmit}>
        <div className="innerFormDiv">
          <label htmlFor="firstName">
            <p>First Name:</p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="lastName">
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="example@domain.com"
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>

        <div className="innerFormDiv">
          <label htmlFor="phone">
            <p>Phone</p>
            <input
              type="tel"
              name="phone"
              placeholder="+55 19 989822222"
              value={phone}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="gitHub">
            <p>GitHub</p>
            <input
              type="text"
              name="github"
              placeholder="github.com/yourUser"
              value={github}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p>LinkedIn</p>
            <input
              type="tel"
              name="linkedin"
              placeholder="linkedin.com/in/user"
              value={linkedin}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="innerFormDiv">
          <label>
            <h4 className="sectionTitle">About me</h4>
            <About />
          </label>
          <div className="btnContainer">
            <button className="formBtn" type="submit">
              <Icon
                path={mdiContentSaveOutline}
                size={0.9}
                color="#22C55E"
                spin={10}
              />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Personal;
