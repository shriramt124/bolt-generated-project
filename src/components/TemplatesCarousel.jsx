import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const TemplatesCarousel = () => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = React.createRef();

  // Placeholder image URLs (more vertically oriented).  Replace with your actual template images.
  const images = [
    "https://placehold.co/400x600/E74C3C/FFFFFF?text=Template+1&font=Montserrat",
    "https://placehold.co/400x600/3498DB/FFFFFF?text=Template+2&font=Montserrat",
    "https://placehold.co/400x600/2ECC71/FFFFFF?text=Template+3&font=Montserrat",
    "https://placehold.co/400x600/F1C40F/FFFFFF?text=Template+4&font=Montserrat",
    "https://placehold.co/400x600/9B59B6/FFFFFF?text=Template+5&font=Montserrat",
    "https://placehold.co/400x600/34495E/FFFFFF?text=Template+6&font=Montserrat",
    "https://placehold.co/400x600/E67E22/FFFFFF?text=Template+7&font=Montserrat",
    "https://placehold.co/400x600/1ABC9C/FFFFFF?text=Template+8&font=Montserrat",
  ];
  const numVisible = 2; // Show fewer templates at once for larger size
  const totalSlides = images.length;

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % totalSlides);
    }, 3000); // Change template every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides, containerRef]);

  const { transform } = useSpring({
    transform: `translateX(-${offset * (width / numVisible)}px)`,
    config: { mass: 1, tension: 280, friction: 30 },
  });

  return (
    <section id="templates" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Templates</h2>
        <p className="text-lg mb-8 text-center text-gray-400">
          Explore the templates available in Reactive Resume and view the resumes crafted with them. They could also serve as examples to help guide the creation of your next resume.
        </p>
        <div className="overflow-hidden" ref={containerRef}>
          <animated.div
            style={{
              display: 'flex',
              width: `${(totalSlides / numVisible) * 100}%`,
              transform,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="p-4 flex-shrink-0"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className="bg-glass-bg backdrop-blur-lg rounded-lg border border-glass-border overflow-hidden shadow-lg">
                  <img src={image} alt={`Template ${index + 1}`} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesCarousel;
