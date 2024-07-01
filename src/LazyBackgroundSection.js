import React, { useState, useEffect, useRef } from "react";
import "intersection-observer";

const LazyBackgroundSection = ({ HomeBg, placeholderImage }) => {
  const [bgImage, setBgImage] = useState(placeholderImage);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = HomeBg;
          img.onload = () => setBgImage(HomeBg);
          observer.unobserve(sectionRef.current);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [HomeBg]);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: bgImage ? `url('${HomeBg}')` : "none",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
