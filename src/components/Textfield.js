// returns text areas tailored to each section based on the props received
function Textfield(props) {
  if (props.firstName) {
    return (
      <fieldset className="textfield">
        <div>
          <span htmlFor="firstName">First Name: </span>
          {props.firstName}
        </div>
        <div>
          <span htmlFor="lastName">Last Name: </span>
          {props.lastName}
        </div>
        <div>
          <span htmlFor="email">Email: </span>
          {props.email}
        </div>
        <div>
          <span htmlFor="phone">Phone: </span>
          {props.phone}
        </div>
        <div>
          <span htmlFor="gitHub">GitHub: </span>
          {props.github}
        </div>
        <div>
          <span htmlFor="linkedin">LinkedIn: </span>
          {props.linkedin}
        </div>
        <div>
          <button>Save</button>
        </div>
      </fieldset>
    );
  } else if (props.skill) {
  } else if (props.company) {
  } else {
  }
}

export default Textfield;
