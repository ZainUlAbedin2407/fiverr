import React from "react";
import "./GigImage.scss";

const GigImage = ({ src, alt }) => {
  return (
    <div className="gigImage">
      <img src={src} alt={alt} />
    </div>
  );
};

export default GigImage;
