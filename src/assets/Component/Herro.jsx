import React from 'react';
import HerroImg from "../images/rocket.png";

function Herro() {
  return (
    <section className='  Herrosection flex flex-col-reverse lg:flex-row justify-between gap-6 py-16 px-6 lg:px-16 container max-w-[1400px]'>

      <div className='flex-1 flex flex-col items-start gap-9 mt-11 text-center lg:text-start '>
        <h1 className='text-2xl font-bold max-w-lg lg:text-6xl  text-center lg:text-start  '>Simply explained with illustrations</h1>
        <p className='text-lg lg:text-xl text-w-md text-center lg:text-start '>There are a lot of different components that will help you create the perfect look for your project</p>

        <div className='flex gap-3 flex-wrap'>
          <button className='bg-[#5F62E2] sm:px-4 sm:py-2  text-sm md:px-4 lg:py-3 lg:px-4 rounded-lg text-white font-semibold hover:bg-purple-700 transition duration-150 ease-out hover:ease-in'>Get Started</button>
          <button className='bg-[#5F62E226] py-2 px-4 rounded-lg text-purple-400 font-semibold hover:text-black hover:bg-purple-700 transition duration-150 ease-out hover:ease-in'>Learn More</button>
        </div>
      </div>

      {/* Corrected image src usage */}
      <img className=' animate-bounce  transition duration-300 w-full lg:max-w-md md:w-[502px] sm:h-[502px]  h-auto' src={HerroImg} alt="Rocket Illustration" />
    </section>
  );
}

export default Herro;
