import React, { useState, useEffect, useRef } from "react";
import "intersection-observer";

const LazyBackgroundSection = ({ HomeBg, placeholderImage }) => {
  const [bgImage, setBgImage] = useState(placeholderImage);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = HomeBg;
          img.onload = () => setBgImage(HomeBg);
          observer.unobserve(currentSectionRef);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [HomeBg]);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : "none",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* Add content here if needed */}
    </section>
  );
};

export default LazyBackgroundSection;
