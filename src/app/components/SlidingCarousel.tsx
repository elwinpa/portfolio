'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

type SlidingCarouselProps = {
  images: string[];
  interval?: number; 
};

const SlidingCarousel: React.FC<SlidingCarouselProps> = ({
  images,
  interval = 3000,
}) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer); // cleanup on unmount
  }, [interval, images.length]);

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prev}>❮</button>
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="carousel-slide" key={i}>
              <Image height={200} width={250} src={img} alt={`Slide ${i}`} className="project-image-content" />
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-arrow right" onClick={next}>❯</button>
    </div>
  );
};

export default SlidingCarousel;
