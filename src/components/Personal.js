import React, { Component } from "react";
import Textfield from "./Textfield";
import SaveBtn from "./SaveBtn";
import DeleteBtn from "./DeleteBtn";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      name: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      aboutMe: "",
      img: null,
    };

    // binds this
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target; // enable editing, updates state to reflect input
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault(); // prevents page reloading
    this.setState((prevState) => {
      return { editMode: !prevState.editMode }; // inverts the prevState
    });
  }

  handleImgDelete = () => {
    console.log("fuck");
    this.setState({ img: null });

    return (
      <div className="innerFormUpload">
        <h4>Profile photo</h4>

        <input type="file" name="myImage" onChange={this.onImageChange} />
      </div>
    );
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        img: URL.createObjectURL(img),
      });
    }
  };

  render() {
    const {
      editMode,
      name,
      age,
      location,
      email,
      phone,
      github,
      linkedin,
      img,
      aboutMe,
    } = this.state; // destructuring the state

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
          handleEdit={this.handleSubmit}
        />
      );
    }

    // constructed when edit mode is on
    return (
      <form className="personalForm" action="" onSubmit={this.handleSubmit}>
        <div className="innerFormDiv">
          {/* Shows either the file picker of the chosen img */}
          {img ? (
            <div className="uploadedImg">
              <img
                src={img}
                alt={"profile"}
                width={"200px"}
                height={"100%"}
              ></img>
              <button
                className="formBtn deleteImg"
                type="button"
                onClick={this.handleImgDelete}
              >
                <DeleteBtn newSize={"2rem"} />
              </button>
            </div>
          ) : (
            <div className="innerFormUpload">
              <h4>Upload profile photo</h4>
              <input type="file" name="myImage" onChange={this.onImageChange} />
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="phone">
              <p>Phone</p>
              <input
                type="tel"
                name="phone"
                placeholder="+55 (19) 98787-5454"
                value={phone}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>

        <label htmlFor="aboutMe">
          <h4 className="sectionTitle">Goal</h4>
          <div className="innerFormDiv">
            <textarea
              className="textAboutMe"
              name="aboutMe"
              placeholder="Write a short description about the position you want to work on, career goals, etc"
              value={aboutMe}
              onChange={this.handleChange}
            />
          </div>
        </label>

        <div className="btnContainer">
          <button className="formBtn" type="submit">
            <SaveBtn />
          </button>
        </div>
      </form>
    );
  }
}

export default Personal;
