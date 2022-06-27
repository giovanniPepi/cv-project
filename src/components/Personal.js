import React, { useState } from "react";
import Textfield from "./Textfield";
import SaveBtn from "./SaveBtn";
import DeleteBtn from "./DeleteBtn";

const Personal = (props) => {
  const [editMode, setEditMode] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    aboutMe: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // enable editing, updates state to reflect input
    setPersonalInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reloading
    setEditMode((prevMode) => !prevMode);
  };

  const handleImgDelete = () => {
    setPersonalInfo((prevInfo) => {
      return { ...prevInfo, img: null };
    });

    return (
      <div className="innerFormUpload">
        <h4>Profile photo</h4>

        <input type="file" name="myImage" onChange={onImageChange} />
      </div>
    );
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let newimg = event.target.files[0];
      setPersonalInfo((prevInfo) => {
        return { ...prevInfo, img: URL.createObjectURL(newimg) };
      });
    }
  };

  const { name, age, location, email, phone, github, linkedin, img, aboutMe } =
    personalInfo;

  // constructed when edit mode off
  if (!editMode) {
    return (
      <Textfield
        firstName={name}
        location={location}
        age={age}
        email={email}
        phone={phone}
        github={github}
        linkedin={linkedin}
        img={img}
        aboutMe={aboutMe}
        handleEdit={handleSubmit}
      />
    );
  }

  // constructed when edit mode is on
  return (
    <form className="personalForm" action="" onSubmit={handleSubmit}>
      <div className="innerFormDiv first">
        {/* Shows either the file picker of the chosen img */}
        {img ? (
          <div className="uploadedImg">
            <img
              src={img}
              alt={"profile"}
              width={"100px"}
              height={"100%"}
            ></img>
            <button
              className="formBtn deleteImg"
              type="button"
              onClick={handleImgDelete}
            >
              <DeleteBtn newSize={"2rem"} />
            </button>
          </div>
        ) : (
          <div className="innerFormUpload">
            <h4>Upload profile photo</h4>
            <input type="file" name="myImage" onChange={onImageChange} />
          </div>
        )}
      </div>
      <div className="personalInputWrapper">
        <div className="innerFormDiv">
          <label htmlFor="name">
            <p>Name</p>
            <input
              id="nameInpt"
              type="text"
              name="name"
              placeholder="John Smith"
              value={name}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="age">
            <p>Age</p>
            <input
              id="ageInpt"
              type="tel"
              name="age"
              placeholder="30"
              value={age}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="location">
            <p>Location</p>
            <input
              id="locationInpt"
              type="text"
              name="location"
              placeholder="Campinas, Brazil"
              value={location}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="innerFormDiv">
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="example@domain.com"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phone">
            <p>Phone</p>
            <input
              type="tel"
              name="phone"
              placeholder="+55 (19) 98787-5454"
              value={phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="innerFormDiv">
          <label htmlFor="gitHub">
            <p>GitHub</p>
            <input
              type="text"
              name="github"
              placeholder="user"
              value={github}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="linkedin">
            <a
              href="https://www.linkedin.com/pulse/how-simplify-your-linkedin-url-brenda-meller-zawacki-/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <input
              type="text"
              name="linkedin"
              placeholder="user"
              value={linkedin}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className="labelAbout">
        <h4 className="sectionTitle toptitle">Goal</h4>
        <textarea
          className="textAboutMe"
          name="aboutMe"
          placeholder="Write a short description about the position you want to work on, career goals, etc"
          value={aboutMe}
          onChange={handleChange}
        />
      </div>

      <div className="btnContainer">
        <button className="formBtn" type="submit">
          <SaveBtn />
        </button>
      </div>
    </form>
  );
};

export default Personal;
