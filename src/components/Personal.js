import React, { Component } from "react";

class Personal extends Component {
  render() {
    return (
      <fieldset>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
          <button id="editFirstName">Edit </button>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
          <button id="editlastName">Edit </button>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="example@domain.com" />
          <button id="editEmail">Edit </button>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="+55 19 989822222" />
          <button id="editPhone">Edit </button>
        </div>
        <div>
          <label htmlFor="gitHub">GitHub</label>
          <input type="text" id="gitHub" placeholder="github.com/yourUser" />
          <button id="editgitHub">Edit </button>
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          <input type="tel" id="linkedin" placeholder="linkedin.com/in/user" />
          <button id="editlinkedin">Edit </button>
        </div>
        <div>
          <button>Save</button>
        </div>
      </fieldset>
    );
  }
}

export default Personal;
