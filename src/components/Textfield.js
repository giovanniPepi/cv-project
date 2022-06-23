import EditBtn from "./EditBtn";

// returns text areas tailored to each section based on the props receive
function Textfield(props) {
  if (props.firstName) {
    return (
      <fieldset className="textfield top">
        {/* main section wrapper in flex=column*/}
        <div className="textfieldWrapper">
          <img
            src={props.img}
            alt={"profile"}
            width={"200px"}
            height={"100%"}
          ></img>
        </div>
        <div className="textfieldWrapper">
          <div>
            <span></span>
            {props.firstName}, {props.age} years old
          </div>
          <div>
            <span></span>
            {props.lastName}
          </div>
          <div>
            <span></span>
            {props.email}
          </div>

          {/* phone is not required, therefore display only if present */}
          {props.phone ? (
            <div>
              <span></span>
              {props.phone}
            </div>
          ) : null}

          {props.github ? (
            <div>
              <span>GitHub: </span>
              {props.github}
            </div>
          ) : null}

          {props.linkedin ? (
            <div>
              <span>LinkedIn: </span>
              {props.linkedin}
            </div>
          ) : null}
        </div>
        <div className="sectionTitle">
          <h3 className="sectionTitle">Goal:</h3>
        </div>
        <div className="textfieldWrapper goal">
          <span>{props.aboutMe}</span>
        </div>
        <div>
          <button className="formBtn editBtn" onClick={props.handleEdit}>
            <EditBtn />
          </button>
        </div>
      </fieldset>
    );
  } else if (props.skill) {
    return (
      <fieldset className="textfield">
        <div>
          <span>Skill: </span>
          {props.skill}
        </div>

        {props.description ? (
          <div>
            <span>Description: </span>
            {props.description}
          </div>
        ) : null}

        <div>
          <button className="formBtn editBtn" onClick={props.handleEdit}>
            <EditBtn />
          </button>
        </div>
      </fieldset>
    );
  } else if (props.company) {
    return (
      <fieldset className="textfield">
        <div className="textfieldWrapper">
          <div>
            <span>Company: </span>
            {props.company}
          </div>

          <div>
            <span>Position: </span>
            {props.position}
          </div>

          {props.from ? (
            <div>
              <span>From: </span>
              {props.from}
            </div>
          ) : null}

          {props.from && props.to ? (
            <div>
              <span>To: </span>
              {props.to}
            </div>
          ) : null}

          {props.from && !props.to ? (
            <div>
              <span>Currently employed </span>
            </div>
          ) : null}
        </div>

        <div className="textfieldWrapper">
          {props.description ? (
            <div className="description">
              <span>Description: {props.description}</span>
            </div>
          ) : null}
        </div>

        <div>
          <button className="formBtn editBtn" onClick={props.handleEdit}>
            <EditBtn />
          </button>
        </div>
      </fieldset>
    );
  } else if (props.institution) {
    return (
      <fieldset className="textfield">
        <div>
          <span>Title: </span>
          {props.school}
        </div>
        <div>
          <span>Institution: </span>
          {props.institution}
        </div>
        {props.from ? (
          <div>
            <span>From: </span>
            {props.from}
          </div>
        ) : null}

        {props.from && props.to ? (
          <div>
            <span>To: </span>
            {props.to}
          </div>
        ) : null}

        {props.from && !props.to ? (
          <div>
            <span>Currently enrolled </span>
          </div>
        ) : null}
        <div>
          <button className="formBtn editBtn" onClick={props.handleEdit}>
            <EditBtn />
          </button>
        </div>
      </fieldset>
    );
  }
}

export default Textfield;
