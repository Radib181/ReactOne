import React, { useState } from 'react';
import img7 from "../images/img7.jpg";
import Logo from "../images/Logo.png";
import img22 from "../images/img22.png";
import baner from "../images/baner.png";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import loglo2 from "../images/loglo2.png";

function ImageSlider() {
  const Sldes = [
    {
      id: 1,
      heading: "Make more time for the work that matters most",
      description: "Best software platform for running an internet business.",
      image: img22,
    },
    {
      id: 2,
      heading: "Simplify your business management",
      description: "Achieve more with efficient tools.",
      image: baner,
    },
    {
      id: 3,
      heading: "Grow and scale with confidence",
      description: "Empowering you to succeed online.",
      image: img7,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const PreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Sldes.length - 1 : prevIndex - 1));
  };

  const NextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Sldes.length - 1 ? 0 : prevIndex + 1));
  };

  const { heading, description, image } = Sldes[currentIndex];

  return (
    <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-24">
      <div className="max-w-[1400px] container mx-auto px-6 md:px-12">
        {/* Slider Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <img className="w-16 md:w-20" src={Logo} alt="Logo" />
            <h1 className="text-2xl md:text-4xl font-bold text-black">
              {heading}
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-md">
              {description}
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={PreviousSlide}
                className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 text-white transition"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={NextSlide}
                className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 text-white transition"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative overflow-hidden  w-[80%] md:w-[60%]">
              <img
                className="w-full h-auto object-cover transition-transform transform hover:scale-105"
                src={image}
                alt={heading}
              />
            </div>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="mt-16">
          <img
            className="w-full object-cover rounded-xl shadow-lg"
            src={loglo2}
            alt="Decorative Footer"
          />
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
