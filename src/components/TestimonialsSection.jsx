import React from 'react';
import { useSpring, animated } from 'react-spring';

const TestimonialsSection = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  const testimonials = [
    {
      quote: "This is really a thank you for Reactive Resume. Drafting resumes was never a strength of mine, so your app really made the whole process easy and smooth!",
      author: "N. Elhour",
    },
    {
      quote: "Hey, Just wanted to let you know you not only helped me get a job, you helped my partner and my childhood friend, who then used your site to help one of her friends get a job. I sponsored you on Github to give back a bit but I wanted to let you know you really made a difference with your resume builder.",
      author: "R. Sinnot",
    },
    {
      quote: "Hey Amruth, I have loved your Reactive Resume Website. Thank you so much for making this kind of thing.",
      author: "A. Rehman",
    },
    {
      quote: "Hi Amruth! First off, many thanks for making RxResume! This is one of the best resume-building tools I have ever found. Have also recommended it to many of my university friends...",
      author: "S. Bhalje",
    },
    {
      quote: "Hey, I am a Mechanical engineer, not understand coding, messy AI, and computer systems. But wait, what drags me here is your creativity. Your website RxResume is all good using it and the efforts you made to keep this free is remarkable. keeping doing great work.",
      author: "P. Jignesh",
    },
    {
      quote: "First of all, I appreciate your effort for making reactive resume a free tool for the community. Very much better than many premium resume builder...",
      author: "S. Innocent",
    },
    {
      quote: "Hi, I just found your resume builder, and I just want to say, I really appreciate it! The moment I saw it was open source, I closed all the other CV sites I was considering. Thank you for your service.",
      author: "K. Lietzau",
    },
    {
      quote: "Hello sir, I just wanted to write a thank you message for developing RxResume. It's easy to use, intuitive and it's much more practical than many others that made you pay up after spending an hour to create your CV. I'll be sure to buy you a coffee after I get my first job. I wish you everything best in life!",
      author: "M. Fritza",
    },
  ];

  return (
    <animated.section style={props} id="testimonials" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
        <p className="text-lg mb-8 text-center text-gray-400">
          I always love to hear from the users of Reactive Resume with feedback or support. Here are some of the messages I've received. If you have any feedback, feel free to drop me an email at <a href="mailto:hello@amruthpillai.com" className="text-blue-500 hover:text-blue-700">hello@amruthpillai.com</a>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-glass-bg backdrop-blur-lg rounded-lg border border-glass-border relative"
            >
              <span className="absolute top-3 right-5 text-5xl text-gray-400 opacity-50">”</span>
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-white">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default TestimonialsSection;
