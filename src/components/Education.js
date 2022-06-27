import React, { useState } from "react";

import Textfield from "./Textfield";
import DeleteBtn from "./DeleteBtn";
import SaveBtn from "./SaveBtn";

const Education = (props) => {
  const [editMode, setEditMode] = useState(true);
  const [educationInfo, setEducationInfo] = useState({
    title: "",
    institution: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo((previInfo) => {
      return { ...previInfo, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevMode) => !prevMode);
  };

  const { title, institution, from, to } = educationInfo;
  const { id, handleDelete } = props;

  if (!editMode) {
    return (
      <Textfield
        title={title}
        institution={institution}
        from={from}
        to={to}
        handleEdit={handleSubmit}
      />
    );
  }

  return (
    <form className="educationForm" action="" onSubmit={handleSubmit}>
      <div className="innerFormDiv">
        <label htmlFor="title">
          <p>Degree</p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="institution">
          <p>Institution</p>
          <input
            type="text"
            name="institution"
            value={institution}
            onChange={handleChange}
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
      <div className="btnContainer">
        <button className="formBtn">
          <SaveBtn />
        </button>
        <button
          className="formBtn"
          type="button"
          onClick={() => handleDelete("educationIds", id)}
        >
          <DeleteBtn />
        </button>
      </div>
    </form>
  );
};

export default Education;
