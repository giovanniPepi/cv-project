import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <fieldset>
        <div>
          <label htmlFor="skill1">Skill 1</label>
          <input type="text" id="skill1" />
          <button id="editSkill1">Edit</button>
          <button id="delteSkill1">Delete</button>
        </div>
        <div>
          <label htmlFor="skill2">Skill 2</label>
          <input type="text" id="skill2" />
          <button id="editSkill2">Edit</button>
          <button id="delteSkill2">Delete</button>
        </div>
        <div>
          <label htmlFor="skill3">Skill 3</label>
          <input type="text" id="skill3" />
          <button id="editSkill3">Edit</button>
          <button id="delteSkill3">Delete</button>
        </div>
        <div>
          <label htmlFor="skill4">Skill 4</label>
          <input type="text" id="skill4" />
          <button id="editSkill4">Edit</button>
          <button id="delteSkill4">Delete</button>
        </div>
        <button>Add Skills</button>
        <button>Save</button>
      </fieldset>
    );
  }
}

export default Skills;
