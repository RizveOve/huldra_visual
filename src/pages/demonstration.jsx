import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/demonstration.css";
import ParagraphWithList from "../minor-components/paragraphWithList";
import RankedAudio from "../minor-components/rankedAudio";
import RankedImage from "../minor-components/rankedImage";
import RankedVideo from "../minor-components/rankedVideo";
import { fetchConfigVariable } from "../utils/handleConfigVars";
import { conditionalPushToBucket } from "../utils/handleResponse";
import { logSessionInfo } from "../utils/localStorage";

const Demonstration = () => {
  const demoId = useParams().demoId;
  const REACT_APP_demonstration = fetchConfigVariable(`REACT_APP_demonstration`)[demoId - 1];

  logSessionInfo(false, `demonstration${demoId}`);
  conditionalPushToBucket();

  return (
    <div className="demonstration-wrapper">
      {(REACT_APP_demonstration["textBefore"] ||
        REACT_APP_demonstration["textAfter"] ||
        REACT_APP_demonstration["listOptions"]) && (
        <ParagraphWithList
          listClassName={REACT_APP_demonstration["listClassName"]}
          textClassName={REACT_APP_demonstration["textClassName"]}
          textBefore={REACT_APP_demonstration["textBefore"]}
          textAfter={REACT_APP_demonstration["textAfter"]}
          listOptions={REACT_APP_demonstration["listOptions"]}
        />
      )}
      <p style={{ textAlign: "left", paddingLeft: "60px" }}>
        In the following, main part of the study, you will evaluate AI-generated explanations across
        two different domains: medical diagnosis and soccer match analysis. The goal is to assess
        how well AI explanations help users understand predictions in different contexts.
      </p>
      <ul style={{ textAlign: "left" }}>
        <li>An image (from a medical scan or a soccer match)</li>
        <li>
          The AI’s prediction about the image (e.g., a medical condition or a soccer decision).
        </li>
        <li>Alternative explanations for the prediction.</li>
      </ul>
      <p style={{ textAlign: "left", paddingLeft: "60px" }}>
        We ask you to rank the explanations based on which one you find most helpful. Please
        carefully look at the image and both explanations before you provide your ranking. Once you
        click on one of the explanations, your ranking will appear on the right.
      </p>
      {REACT_APP_demonstration["hasImage"] && (
        <RankedImage
          path={REACT_APP_demonstration["imagePath"]}
          className={REACT_APP_demonstration["imageClassName"]}
          wrapperClassName={REACT_APP_demonstration["wrapperClassName"]}
        />
      )}
      {REACT_APP_demonstration["hasVideo"] && (
        <RankedVideo
          url={REACT_APP_demonstration["videoPath"]}
          height={REACT_APP_demonstration["videoHeight"]}
          width={REACT_APP_demonstration["videoWidth"]}
        />
      )}
      {REACT_APP_demonstration["hasAudio"] && (
        <RankedAudio
          url={REACT_APP_demonstration["audioPath"]}
          height={REACT_APP_demonstration["audioHeight"]}
          width={REACT_APP_demonstration["audioWidth"]}
        />
      )}
    </div>
  );
};

export default Demonstration;
