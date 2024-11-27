import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Group from "../images/Group 39.png";
import Group2 from "../images/Group 38.png";
import Group4 from "../images/img6.png";

function Blog() {
  const Cardata = [
    {
      id: 1,
      ImageSrc: Group,
      title: "Make myspace your best designed space",
      description:
        "Discover components that inspire and help you create a stunning visual experience for your project.",
      buttonLabel: "Design",
    },
    {
      id: 2,
      ImageSrc: Group2,
      title: "My company culture has changed today",
      description:
        "Explore innovative illustrations and elements that redefine how teams connect and create together.",
      buttonLabel: "3D Illustrations",
    },
    {
      id: 3,
      ImageSrc: Group4,
      title: "Professionals in craft! All products were super great",
      description:
        "Build exceptional digital experiences with tools designed for both creativity and performance.",
      buttonLabel: "Development",
    },
  ];

  return (
    <section className="relative z-10 bg-white sm:pt-32 pt-16 pb-16 px-4 sm:px-8 lg:px-16">
      {/* Header Section */}
      <section className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Stay Inspired with Our Blog
            </h1>
            <p className="max-w-md text-lg mt-4 text-gray-600">
              Discover ideas, resources, and stories that elevate your projects to the next level.
            </p>
          </div>
          <div>
            <button className="bg-indigo-700 text-white px-6 py-3 mt-6 rounded-lg hover:bg-indigo-600 shadow-lg font-semibold transition-all duration-300 ease-in-out flex items-center gap-2">
              Learn More
              <ArrowForwardIcon />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Cardata.map((card) => (
            <div
              key={card.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-700 transition-all duration-300 ease-in-out"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={card.ImageSrc}
                  alt={card.title}
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
                <button className="text-sm py-2 px-6 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
                  {card.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Blog;
