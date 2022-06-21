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
      educationIds: [],
      experienceIds: [],
    };
  }

  // creates a new instace of the element inside the state, which is then rendered
  handleClick(type) {
    this.setState((prevState) => {
      return {
        [type]: [...prevState[type], uniqid()],
      };
    });
  }
  handleDelete() {}

  render() {
    const skills = this.state.skillsIds.map((id) => (
      <Skills key={id} id={id} handleDelete={this.handleDelete} />
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
          <h3>Experience</h3>
          <Experience />
          <h3>Education</h3>
          <Education />
          <button>Preview</button>
          <button>Print</button>
        </section>
      </main>
    );
  }
}

export default App;
