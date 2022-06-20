import style from "./styles/App.css";
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
          <Personal />
          <Skills />
          <Experience />
          <Education />
        </fieldset>
      </form>
    );
  }
}

export default App;
