import React, { useState } from "react";
import uniqid from "uniqid";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import style from "./styles/App.css";
import AddBtn from "./components/AddBtn";
import PreviewBtn from "./components/PreviewBtn";

const App = () => {
  const [skillsIds, setSkillsIds] = useState([]);
  const [experienceIds, setExperienceIds] = useState([]);
  const [educationIds, setEducationIds] = useState([]);

  // creates a new instace of the element inside the state, which is then rendered
  const handleClick = (type) => {
    if (type === "experienceIds") {
      setExperienceIds((prevExpIds) => [...prevExpIds, uniqid()]);
    } else if (type === "skillsIds") {
      setSkillsIds((prevSkillsIds) => [...prevSkillsIds, uniqid()]);
    } else {
      setEducationIds((prevEducationIds) => [...prevEducationIds, uniqid()]);
    }
  };

  const handleDelete = (type, id) => {
    if (type === "experienceIds") {
      setExperienceIds((prevExpIds) => {
        let newlist = prevExpIds.filter((key) => key !== id);
        return newlist;
      });
    } else if (type === "skillsIds") {
      setSkillsIds((prevSkillsIds) => {
        let newlist = prevSkillsIds.filter((key) => key !== id);
        return newlist;
      });
    } else {
      setEducationIds((prevEducationIds) => {
        let newlist = prevEducationIds.filter((key) => key !== id);
        return newlist;
      });
    }
  };

  const skills = skillsIds.map((id) => (
    <Skills key={id} id={id} handleDelete={handleDelete} />
  ));

  const experiences = experienceIds.map((id) => (
    <Experience key={id} id={id} handleDelete={handleDelete} />
  ));

  const educations = educationIds.map((id) => (
    <Education key={id} id={id} handleDelete={handleDelete} />
  ));

  return (
    <main className="App" id="mainForm">
      <section className="mainSection">
        <header className="header">
          <h2>CV Generator</h2>
        </header>
        <Personal />
        <h4 className="sectionTitle">
          <p className="pTitle">Skills</p>
          <button className="addBtn" onClick={() => handleClick("skillsIds")}>
            <AddBtn />
          </button>
        </h4>
        {skills}
        <h4 className="sectionTitle">
          <p className="pTitle">Experience</p>
          <button
            className="addBtn"
            onClick={() => handleClick("experienceIds")}
          >
            <AddBtn />
          </button>
        </h4>
        {experiences}
        <h4 className="sectionTitle">
          <p className="pTitle">Education</p>
          <button
            className="addBtn"
            onClick={() => handleClick("educationIds")}
          >
            <AddBtn />
          </button>
        </h4>
        {educations}
        <button
          onClick={() => {
            window.print();
          }}
          className="addBtn printBtn"
        >
          <PreviewBtn />
          <p>
            <strong>Preview/PDF</strong>
          </p>
        </button>
      </section>
    </main>
  );
};

export default App;
