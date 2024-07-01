import React, { useState, useEffect, useRef } from "react";
import HomeBg from "./images/wallBGwebcompressed.webp";
import placeholderImage from "./images/wallBGwebcompressedx10.webp";
import "intersection-observer";

const LazyBackgroundSection = () => {
  const [bgImage, setBgImage] = useState(placeholderImage);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("IntersectionObserver entry:", entry);
        if (entry.isIntersecting) {
          console.log("Image is intersecting, loading:", HomeBg);
          const img = new Image();
          img.src = HomeBg;
          img.onload = () => {
            console.log("Image loaded:", HomeBg);
            setBgImage(HomeBg);
          };
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
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "350px", // Ensure the section has height
      }}>
      <article className=" p-5 h-96 w-full flex flex-col justify-center items-start backdrop-blur-sm space-y-2 text-white">
        <h1 className="text-5xl">Welcome.</h1>
        <div>
          <h2 className="text-3xl">
            Millions of movies and people to discover.
          </h2>
          <h2 className="text-3xl">Explore now.</h2>
        </div>
      </article>
    </section>
  );
};

export default LazyBackgroundSection;
