import Imageuploader from "./Imageuploader";
import { mdiPencilOutline, mdiPencil } from "@mdi/js";
import Icon from "@mdi/react";

// returns text areas tailored to each section based on the props receive
function Textfield(props) {
  if (props.firstName) {
    return (
      <fieldset className="textfield">
        <Imageuploader />
        <div className="textfieldWrapper">
          <div>
            <span></span>
            {props.firstName}
          </div>
          <div>
            <span></span>
            {props.lastName}
          </div>
          <div>
            <span></span>
            {props.email}
          </div>
        </div>

        <div className="textfieldWrapper">
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
        <div>
          <button className="formBtn editBtn" onClick={props.handleEdit}>
            <Icon path={mdiPencil} size={0.9} color="#22C55E" spin={10} />
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
            <Icon
              path={mdiPencilOutline}
              size={0.9}
              color="#22C55E"
              spin={10}
            />
          </button>
        </div>
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

        <div>
          <button className="formBtn editBtn" onClick={props.handleEdit}>
            <Icon
              path={mdiPencilOutline}
              size={0.9}
              color="#22C55E"
              spin={10}
            />
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
            <Icon
              path={mdiPencilOutline}
              size={0.9}
              color="#22C55E"
              spin={10}
            />
          </button>
        </div>
      </fieldset>
    );
  } else if (props.aboutMe) {
    return (
      <fieldset className="textfield">
        <div>
          <span>About me: </span>
          {props.aboutMe}
        </div>
        <button className="formBtn editBtn" onClick={props.handleEdit}>
          <Icon path={mdiPencilOutline} size={0.9} color="#22C55E" spin={10} />
        </button>
      </fieldset>
    );
  }
}

export default Textfield;
