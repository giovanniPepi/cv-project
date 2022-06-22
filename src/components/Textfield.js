import { NoPrint } from "react-easy-print";
import Imageuploader from "./Imageuploader";

// returns text areas tailored to each section based on the props receive
function Textfield(props) {
  if (props.firstName) {
    return (
      <fieldset className="textfield">
        <Imageuploader />
        <div className="textfieldWrapper">
          <div>
            <span htmlFor="firstName"></span>
            {props.firstName}
          </div>
          <div>
            <span htmlFor="lastName"></span>
            {props.lastName}
          </div>
          <div>
            <span htmlFor="email"></span>
            {props.email}
          </div>
        </div>

        <div className="textfieldWrapper">
          {/* phone is not required, therefore display only if present */}
          {props.phone ? (
            <div>
              <span htmlFor="phone"></span>
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
        </div>
        <NoPrint>
          <div>
            <button className="formBtn editBtn" onClick={props.handleEdit}>
              Edit
            </button>
          </div>
        </NoPrint>
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

        <NoPrint>
          <div>
            <button className="formBtn editBtn" onClick={props.handleEdit}>
              Edit
            </button>
          </div>
        </NoPrint>
      </fieldset>
    );
  } else if (props.company) {
    return (
      <fieldset className="textfield">
        <div>
          <span>Company: </span>
          {props.company}
        </div>
        {}
        <div>
          <span>Position: </span>
          {props.position}
        </div>

        {props.description ? (
          <div>
            <span>Description: </span>
            {props.description}
          </div>
        ) : null}

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

        <NoPrint>
          <div>
            <button className="formBtn editBtn" onClick={props.handleEdit}>
              Edit
            </button>
          </div>
        </NoPrint>
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
        <NoPrint>
          <div>
            <button className="formBtn editBtn" onClick={props.handleEdit}>
              Edit
            </button>
          </div>
        </NoPrint>
      </fieldset>
    );
  }
}

export default Textfield;
