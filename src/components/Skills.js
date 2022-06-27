import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";
import SaveBtn from "./SaveBtn";
import Textfield from "./Textfield";

const Skills = (props) => {
  const [editMode, setEditMode] = useState(true);
  const [skillInfo, setSkillInfo] = useState({
    skill: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevState) => !prevState);
  };

  const { skill, description } = skillInfo; //destructuring
  const { id, handleDelete } = props; // receives from App

  // text returned when input is saved
  if (!editMode) {
    return (
      <Textfield
        skill={skill}
        description={description}
        handleEdit={handleSubmit}
      />
    );
  }

  return (
    <form className="skillForm" action="" onSubmit={handleSubmit}>
      <div className="innerFormDiv">
        <label htmlFor="skill">
          <p>Skill</p>
          <input
            type="text"
            name="skill"
            value={skill}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="description">
          <p>Description</p>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="btnContainer skillsbtncontainer">
        <button className="formBtn skillsBtn" type="submit">
          <SaveBtn />
        </button>
        <button
          className="formBtn"
          type="button"
          onClick={() => handleDelete("skillsIds", id)}
        >
          <DeleteBtn />
        </button>
      </div>
    </form>
  );
};

export default Skills;
