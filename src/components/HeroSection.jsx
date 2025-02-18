import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Main content animation
  const contentProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
    config: config.molasses,
    delay: 200,
  });

  // Floating animation
  const floatAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-20px)' },
    loop: { reverse: true },
    config: { duration: 3000 },
  });

  // Background gradient animation
  const gradientProps = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 15000 },
    loop: true,
  });

  // Button hover animation
  const Button = () => {
    const [hovered, setHovered] = React.useState(false);
    
    const btnProps = useSpring({
      transform: hovered ? 'scale(1.05)' : 'scale(1)',
      boxShadow: hovered 
        ? '0 20px 40px rgba(126, 58, 242, 0.4)' 
        : '0 10px 20px rgba(126, 58, 242, 0.2)',
      config: config.gentle,
    });

    return (
      <animated.button
        style={btnProps}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 px-8 rounded-xl relative overflow-hidden group"
      >
        <span className="relative z-10 text-lg md:text-xl">Get Started</span>
        <animated.div
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
          style={floatAnimation}
        />
      </animated.button>
    );
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <animated.div
        style={gradientProps}
        className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-emerald-900/30 bg-[length:400%_400%]"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <animated.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              ...floatAnimation,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <animated.div style={contentProps} className="container mx-auto text-center relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Create a Professional
            </span>
            <br />
            <animated.span 
              className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
              style={floatAnimation}
            >
              Resume in Minutes
            </animated.span>
          </h1>
          
          <animated.p 
            className="text-xl md:text-3xl mb-12 text-gray-300 font-light"
            style={floatAnimation}
          >
            Powered by AI, Perfected for <span className="text-purple-400">You</span>
          </animated.p>

          <Button />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 -z-10 bg-grid-white/5" />
      </animated.div>

      {/* Animated shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
    </section>
  );
};

export default HeroSection;