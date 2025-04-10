import React from "react";
import { conditionalPushToBucket } from "../utils/handleResponse";
import Asterisk from "./asterisk";
import Icon from "./icon";

// this component is used in both "registration" and "feedbackForm"!
const InputTextArea = ({
  id,
  label,
  onChange,
  optional,
  showTooltip,
  tooltipMessage,
  type = "text",
  className = "feedback-text-input",
  blur,
}) => {
  /**
   * get the saved answer from local storage, so as to repopulate the answer
   * @param   {string} id The id of the question. If it is comment to mc questions, the id is followed by '-comment'
   * @returns {string} text of the saved answer
   */
  const getSavedAnswer = (id) => {
    // if the id is comment to mc questions, the id is followed by '-comment'
    if (id.endsWith("-comment")) {
      id = id.slice(0, -8);
    }

    let text = "";
    const FeedbackFormAnswers = JSON.parse(localStorage.getItem("FeedbackFormAnswers"));
    if (FeedbackFormAnswers) {
      const answer = FeedbackFormAnswers[id];
      if (answer) {
        text = answer.text;
      }
    }
    return text;
  };

  const handleOnBlur = () => {
    if (blur === false) {
      return;
    } else {
      conditionalPushToBucket();
    }
  };

  return (
    <div className={className}>
      <label style={{ paddingLeft: "10px" }} htmlFor={id} className="radio-question">
        {showTooltip && (
          <Icon tooltipMessage={tooltipMessage} className=" fa fa-info-circle form-tooltip ml-1" />
        )}{" "}
        {label} {optional && <span className="input-text-area-optional-text"> </span>}{" "}
        {!optional && <Asterisk />}
      </label>
      <textarea
        style={{ height: "50px", width: "250px", paddingLeft: "10px", fontSize: "29px" }}
        type={type}
        id={id}
        onChange={onChange}
        defaultValue={getSavedAnswer(id)}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

export default InputTextArea;
