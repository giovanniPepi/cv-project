import React, { Component } from "react";
import Textfield from "./Textfield";

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
  }
  render() {
    // destructuring the state

    const { editMode, firstName, lastName, email, phone, github, linkedin } = this.state

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
          handleEdit={''}
          />       
      )
    }
    
    // constructed when edit mode is on
    return (
         return (
      <fieldset className="textfield">
        <div>
          <label htmlFor="firstName">First Name: </label>
          {props.firstName}
          <input type="text" id="firstName" />
          <button id="editFirstName">Edit </button>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          {props.lastName}
          <input type="text" id="lastName" />
          <button id="editlastName">Edit </button>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          {props.email}
          <input type="email" id="email" placeholder="example@domain.com" />
          <button id="editEmail">Edit </button>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          {props.phone}
          <input type="tel" id="phone" placeholder="+55 19 989822222" />
          <button id="editPhone">Edit </button>
        </div>
        <div>
          <label htmlFor="gitHub">GitHub</label>
          {props.github}
          <input type="text" id="gitHub" placeholder="github.com/yourUser" />
          <button id="editgitHub">Edit </button>
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          {props.linkedin}
          <input type="tel" id="linkedin" placeholder="linkedin.com/in/user" />
          <button id="editlinkedin">Edit </button>
        </div>
        <div>
          <button>Save</button>
        </div>
      </fieldset>
    )
  }
}

export default Personal;
