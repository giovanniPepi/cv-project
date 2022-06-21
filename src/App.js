import { Component } from "react";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import style from "./styles/App.css";

class App extends Component {
  render() {
    return (
      <main className="App" id="mainForm">
        <section className="mainSection">
          <h2>CV Generator</h2>
          <h3>General Info</h3>
          <Personal />
          <h3>Skills</h3>
          <Skills />
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
