import { Component } from "react";
import uniqid from "uniqid";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Icon from "@mdi/react";
import { mdiFileFind, mdiPlusThick } from "@mdi/js";
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
          <header className="header">CV Generator</header>
          <h3 className="sectionTitle">General Info</h3>
          <Personal />
          <h3 className="sectionTitle">
            Skills
            <button
              className="addBtn"
              onClick={() => this.handleClick("skillsIds")}
            >
              <Icon path={mdiPlusThick} size={0.9} color="#22C55E" spin={10} />
            </button>
          </h3>
          {skills}

          <h3 className="sectionTitle">
            Experience
            <button
              className="addBtn"
              onClick={() => this.handleClick("experienceIds")}
            >
              <Icon path={mdiPlusThick} size={0.9} color="#22C55E" spin={10} />
            </button>
          </h3>
          {experiences}

          <h3 className="sectionTitle">
            Education
            <button
              className="addBtn"
              onClick={() => this.handleClick("educationIds")}
            >
              <Icon path={mdiPlusThick} size={0.9} color="#22C55E" spin={10} />
            </button>
          </h3>
          {educations}

          <button
            onClick={() => {
              window.print();
            }}
            className="addBtn printBtn"
          >
            <Icon path={mdiFileFind} size={0.9} color="#22C55E" spin={10} />
          </button>
        </section>
      </main>
    );
  }
}

export default App;
