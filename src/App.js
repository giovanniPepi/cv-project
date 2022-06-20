import { Component } from "react";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
      <form className="App" id="mainForm">
        <fieldset>
          <h2>CV Generator</h2>
          <h3>General Info</h3>
          <Personal />
          <Skills />
          <Experience />
          <Education />
          <button>Preview</button>
          <button>Print</button>
        </fieldset>
      </form>
    );
  }
}

export default App;
