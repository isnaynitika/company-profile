import React, { useState } from "react";

const ImageLoader = ({ src, alt, width, height }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <div className={`relative w-${width} h-${height}`}>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
          Loading...
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoaded}
        className={`w-full h-full ${loading ? "hidden" : "block"}`}
      />
    </div>
  );
};

export default ImageLoader;
