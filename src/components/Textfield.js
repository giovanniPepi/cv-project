// returns text areas tailored to each section based on the props receive
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

        {/* phone is not required, therefore display only if present */}
        {props.phone ? (
          <div>
            <span htmlFor="phone">Phone: </span>
            {props.phone}
          </div>
        ) : null}

        {props.github ? (
          <div>
            <span htmlFor="gitHub">GitHub: </span>
            {props.github}
          </div>
        ) : null}

        {props.linkedin ? (
          <div>
            <span htmlFor="linkedin">LinkedIn: </span>
            {props.linkedin}
          </div>
        ) : null}

        <div>
          <button onClick={props.handleEdit}>Edit</button>
        </div>
      </fieldset>
    );
  } else if (props.skill) {
    return (
      <fieldset className="textfield">
        <div>
          <span htmlFor="skill">Skill: </span>
          {props.skill}
        </div>

        {props.description ? (
          <div>
            <span htmlFor="description">Last Name: </span>
            {props.description}
          </div>
        ) : null}

        <div>
          <button onClick={props.handleEdit}>Edit</button>
        </div>
      </fieldset>
    );
  } else if (props.company) {
    return (
      <fieldset className="textfield">
        <div>
          <span htmlFor="company">Company: </span>
          {props.company}
        </div>
        {}
        <div>
          <span htmlFor="position">Position: </span>
          {props.position}
        </div>

        {props.description ? (
          <div>
            <span htmlFor="description">Description: </span>
            {props.description}
          </div>
        ) : null}

        {props.from ? (
          <div>
            <span htmlFor="from">From: </span>
            {props.from}
          </div>
        ) : null}

        {props.from && props.to ? (
          <div>
            <span htmlFor="to">To: </span>
            {props.to}
          </div>
        ) : null}

        {props.from && !props.to ? (
          <div>
            <span htmlFor="to">Currently employed </span>
          </div>
        ) : null}

        <div>
          <button onClick={props.handleEdit}>Edit</button>
        </div>
      </fieldset>
    );
  } else if (props.institution) {
    return (
      <fieldset className="textfield">
        <div>
          <span htmlFor="company">Title: </span>
          {props.school}
        </div>
        <div>
          <span htmlFor="lastName">Institution: </span>
          {props.institution}
        </div>
        <div>
          <span htmlFor="email">From: </span>
          {props.from}
        </div>
        <div>
          <span htmlFor="phone">To: </span>
          {props.to}
        </div>
        <div>
          <button onClick={props.handleEdit}>Edit</button>
        </div>
      </fieldset>
    );
  }
}

export default Textfield;
