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
        <div className="textfieldWrapper company">
          <div className="company">
            <strong>{props.company}</strong>- {props.position}
          </div>
        </div>

        <div className="textfieldWrapper company">
          {props.from && props.to ? (
            <div className="company">
              <em>
                {props.from} - {props.to}
              </em>
            </div>
          ) : null}
        </div>

        <div className="textfieldWrapper company">
          {props.from && !props.to ? (
            <div className="company">
              <em>{props.from} - current </em>
            </div>
          ) : null}
        </div>

        <div className="textfieldWrapper company">
          {props.description ? (
            <div className="description">{props.description}</div>
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
          <strong>{props.title}</strong> - {props.institution}
        </div>

        <div className="textfieldWrapper company">
          {props.from && props.to ? (
            <div className="company">
              <em>
                {props.from} - {props.to}
              </em>
            </div>
          ) : null}
        </div>

        <div className="textfieldWrapper company">
          {props.from && !props.to ? (
            <div className="company">
              <em>{props.from} - current </em>
            </div>
          ) : null}
        </div>

        <div className="textfieldWrapper company">
          {props.description ? (
            <div className="description">{props.description}</div>
          ) : null}
        </div>

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
