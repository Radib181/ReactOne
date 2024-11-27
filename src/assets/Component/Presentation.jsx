import React from "react";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.jpg";
import img0 from "../images/img0.jpg";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import social3 from "../images/social3.jpg";
import social1 from "../images/social1.jpg";
import social2 from "../images/social2.jpg";

function Presentation() {
  const CardData = [
    {
      Source: img3,
      Heading: "Management",
      text: "Software platform for running your new internet business",
    },
    {
      Source: img5,
      Heading: "Entertainment",
      text: "Software platform for running your new internet business",
    },
    {
      Source: img0,
      Heading: "Marketing",
      text: "Software platform for running your new internet business",
    },
    {
      Source: img5,
      Heading: "References",
      text: "Software platform for running your new internet business",
    },
  ];

  const socialLink = [{ Link: social1 }, { Link: social2 }, { Link: social3 }];

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container flex flex-col lg:flex-row items-center gap-20 py-12 px-6 md:px-12 lg:px-6 max-w-[1400px] mx-auto">
        {/* Left Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  className="rounded-full w-24 h-24 transition-transform transform hover:scale-110 hover:rotate-6"
                  src={card.Source}
                  alt={card.Heading}
                />
              </div>
              <h3 className="text-black text-lg font-semibold text-center">
                {card.Heading}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-black text-3xl md:text-4xl font-semibold max-w-md mx-auto lg:mx-0">
            The quickest way to create modern presentations
          </h1>
          <p className="text-gray-500 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
            Best software platform for running an internet business. We build
            the most powerful and flexible tools for internet commerce.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 py-3 px-6 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl hover:from-purple-700 hover:to-purple-500 transition-all">
            Explore All
            <ArrowForwardIcon sx={{ fontSize: 24, marginLeft: 1 }} />
          </button>

          <p className="text-gray-700 font-semibold">Follow us</p>

          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            {socialLink.map((social, index) => (
              <a
                key={index}
                href="#"
                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-transform transform hover:scale-110"
              >
                <img
                  className="w-8 h-8"
                  src={social.Link}
                  alt={`Social ${index + 1}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
