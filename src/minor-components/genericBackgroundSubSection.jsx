import React from "react";
import RankedImage from "./rankedImage";
const GenericBackgroundSubSection = ({
  title = "Intrinsic (Saliency Based)",
  text = `Intrinsic explanations visualize which regions of an image the model finds most important for a given prediction. These visualizations are presented as heatmaps, where red indicates important regions and blue indicates non-important regions.`,
  className = "background-single-block",
  imagePath = "/gallery/background/background-intrinsic.png",
  imageClassName = "explanation-background-image",
  imageAlternativeText = "Intrinsic explanation",
  descriptionClassName = "background-single-block-description-content",
  titleClassName = "background-single-block-description-label",
  textClassName = "background-text-content",
  text1 = "new text",
  text2 = "new text",
}) => {
  return (
    <div className={className}>
      <RankedImage
        path={imagePath}
        alternativeText={imageAlternativeText}
        className={imageClassName}
      />

      <div className={descriptionClassName}>
        <span className={titleClassName}>{title}</span>
        <p className={textClassName}> {text}</p>
        <ul>
          <li>{text1}</li>
          <li>{text2}</li>
        </ul>
      </div>
    </div>
  );
};

export default GenericBackgroundSubSection;
