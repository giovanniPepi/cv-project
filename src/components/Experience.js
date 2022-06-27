import React, { useState } from "react";
import Textfield from "./Textfield";
import SaveBtn from "./SaveBtn";
import DeleteBtn from "./DeleteBtn";

const Experience = (props) => {
  const [editMode, setEditMode] = useState(true);
  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    description: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevState) => !prevState);
  };

  const { company, position, description, from, to } = experienceInfo;
  const { id, handleDelete } = props;

  if (!editMode) {
    return (
      <Textfield
        company={company}
        position={position}
        description={description}
        from={from}
        to={to}
        handleEdit={handleSubmit}
      />
    );
  }

  return (
    <form className="experienceForm" action="" onSubmit={handleSubmit}>
      <div className="innerFormDiv">
        <label htmlFor="company">
          <p>Company</p>
          <input
            type="text"
            name="company"
            value={company}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="position">
          <p>Position</p>
          <input
            type="text"
            name="position"
            value={position}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="innerFormDiv">
        <label htmlFor="from">
          <p>From</p>
          <input type="date" name="from" value={from} onChange={handleChange} />
        </label>

        <label htmlFor="to">
          <p>To</p>
          <input type="date" name="to" value={to} onChange={handleChange} />
        </label>
      </div>

      <div className="labelAbout">
        <p>Description</p>
        <textarea
          type="text"
          className="textAboutMe"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="btnContainer">
        <button className="formBtn experienceBtn" type="submit">
          <SaveBtn />
        </button>
        <button
          className="formBtn"
          type="button"
          onClick={() => handleDelete("experienceIds", id)}
        >
          <DeleteBtn />
        </button>
      </div>
    </form>
  );
};

export default Experience;
