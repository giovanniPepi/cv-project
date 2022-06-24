import EditBtn from "./EditBtn";

// returns text areas tailored to each section based on the props receive
function Textfield(props) {
  if (props.firstName) {
    return (
      <div className="textfield top">
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
            <strong>{props.firstName}</strong>, {props.age} years old
          </div>
          <div>{props.email}</div>

          {/* phone is not required, therefore display only if present */}
          {props.phone ? <div>{props.phone}</div> : null}

          {props.github ? <em>github.com/{props.github}</em> : null}

          {props.linkedin ? (
            <div>
              <em>www.linkedin.com/in/{props.linkedin}</em>
            </div>
          ) : null}
        </div>
        <div className="sectionTitle">
          <h3 className="sectionTitle">Goal:</h3>
        </div>
        <div className="textfieldWrapper goal">{props.aboutMe}</div>
        <div>
          <button className="formBtn editBtn" onClick={props.handleEdit}>
            <EditBtn />
          </button>
        </div>
      </div>
    );
  } else if (props.skill) {
    return (
      <div className="textfield skill">
        {props.description ? (
          <div>
            <li>
              <strong>{props.skill}: </strong>
              {props.description}
            </li>
          </div>
        ) : (
          <div>
            <li>
              <strong>{props.skill}</strong>
            </li>
          </div>
        )}
        <div>
          <button className="formBtn editBtn" onClick={props.handleEdit}>
            <EditBtn />
          </button>
        </div>
      </div>
    );
  } else if (props.company) {
    return (
      <div className="textfield">
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
      </div>
    );
  } else if (props.institution) {
    return (
      <div className="textfield">
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
      </div>
    );
  }
}

export default Textfield;
