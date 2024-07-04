import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageComponent = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {!imageLoaded && <Skeleton height={300} width={173} />}
      <img
        src={src}
        alt={alt}
        style={{ display: imageLoaded ? "block" : "none" }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)} // Handle error by setting loaded to true to remove skeleton
      />
    </div>
  );
};

export default ImageComponent;
