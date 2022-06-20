import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <fieldset>
        <button>Add</button>
        <div>
          <label htmlFor="school">School</label>
          <input type="text" placeholder="School name" />
        </div>
        <div>
          <label htmlFor="position">Course</label>
          <input type="text" placeholder="Computer Science" />
        </div>
        <div>
          <label htmlFor="startDate">From</label>
          <input type="date" placeholder="dd/mm/yyyy" id="startDate" />
        </div>
        <div>
          <label htmlFor="endDate">To</label>
          <input type="date" placeholder="dd/mm/yyyy" id="endDate" />
        </div>
        <div>
          <textarea className="description"></textarea>
        </div>
        <button>Save</button>
        <button>Delete</button>
      </fieldset>
    );
  }
}

export default Education;
