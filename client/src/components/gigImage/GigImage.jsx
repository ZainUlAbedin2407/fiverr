import React from "react";

const GigImage = ({ src }) => {
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = "/img/no-image.webp";
  };

  return (
    <img
      src={src || "/img/no-image.webp"}
      alt="gig"
      onError={handleError}
      style={{
        width: "100%",
        height: "400px",
        objectFit: "contain",
        borderRadius: "8px",
      }}
    />
  );
};

export default GigImage;
