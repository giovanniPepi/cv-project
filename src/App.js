import { Component } from "react";
import uniqid from "uniqid";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import style from "./styles/App.css";
import AddBtn from "./components/AddBtn";
import PreviewBtn from "./components/PreviewBtn";

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
          <header className="header">
            <h2>CV Generator</h2>
          </header>
          <Personal />

          <h4 className="sectionTitle">
            <p className="pTitle">Skills</p>
            <button
              className="addBtn"
              onClick={() => this.handleClick("skillsIds")}
            >
              <AddBtn />
            </button>
          </h4>
          {skills}

          <h4 className="sectionTitle">
            <p className="pTitle">Experience</p>
            <button
              className="addBtn"
              onClick={() => this.handleClick("experienceIds")}
            >
              <AddBtn />
            </button>
          </h4>
          {experiences}

          <h4 className="sectionTitle">
            <p className="pTitle">Education</p>
            <button
              className="addBtn"
              onClick={() => this.handleClick("educationIds")}
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
  }
}

export default App;
