import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <fieldset>
        <button>Add</button>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" placeholder="company name" />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <input type="text" placeholder="Sr React Developer" />
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

export default Experience;
