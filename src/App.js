import { Component } from "react";
import uniqid from "uniqid";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import style from "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillsIds: [],
      experienceIds: [],
      educationIds: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // creates a new instace of the element inside the state, which is then rendered
  handleClick(type) {
    this.setState((prevState) => {
      return {
        [type]: [...prevState[type], uniqid()],
      };
    });
  }

  handleDelete(type, id) {
    this.setState((prevState) => {
      let filtered = prevState[type].filter((key) => key !== id);
      return {
        [type]: filtered,
      };
    });
  }

  render() {
    const skills = this.state.skillsIds.map((id) => (
      <Skills key={id} id={id} handleDelete={this.handleDelete} />
    ));

    const experiences = this.state.experienceIds.map((id) => (
      <Experience key={id} id={id} handleDelete={this.handleDelete} />
    ));

    const educations = this.state.educationIds.map((id) => (
      <Education key={id} id={id} handleDelete={this.handleDelete} />
    ));

    return (
      <main className="App" id="mainForm">
        <section className="mainSection">
          <h2>CV Generator</h2>
          <h3 className="sectionTitle">General Info</h3>
          <Personal />

          <h3 className="sectionTitle">Skills</h3>
          {skills}
          <button
            className="addBtn"
            onClick={() => this.handleClick("skillsIds")}
          >
            Add
          </button>

          <h3 className="sectionTitle">Experience</h3>
          {experiences}
          <button
            className="addBtn"
            onClick={() => this.handleClick("experienceIds")}
          >
            Add
          </button>
          <h3 className="sectionTitle">Education</h3>
          {educations}
          <button
            className="addBtn"
            onClick={() => this.handleClick("educationIds")}
          >
            Add
          </button>
        </section>
        <button>Preview</button>
        <button>Print</button>
      </main>
    );
  }
}

export default App;
