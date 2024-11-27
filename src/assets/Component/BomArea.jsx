import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img11 from "../images/img11.jpg"
function BomArea() {
  return (
   <section className='bg-indigo-500 w-full h-[299px] mb-11 rounded-lg mx-auto'>

     <div className='flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px] ml-8 '>

      <div className='flex-1 flex flex-col gap-8 p-5'>
        <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold text-white md:text-start  w-[85%]'>The quikest way to create awasome presentation </h1>


        <div className='flex  space-x-5 flex-wrap '>
        <button className="bg-green-600 px-4 py-2 mt-9 rounded-lg hover:bg-gray-300 font-semibold   hover:text-black transition duration-150 ease-out hover:ease-in ">
        Learn more
            <ArrowForwardIcon   sx={{ fontSize: 24 }} />
          </button>

        <button className=" bg-gray-300  px-4 py-2 mt-9 rounded-lg hover:bg-green-600 font-semibold   hover:text-black transition duration-150 ease-out hover:ease-in ">
        Learn more
            <ArrowForwardIcon   sx={{ fontSize: 24 }} />
          </button>
        </div>

      </div>


      <div className='flex-1 '>
          <img className='  w-[400px] h-[350px] md:h-[300px] rounded-full [-300px] ' src={img11} alt=""/>
      </div>

     </div>
   </section>
  )
}

export default BomArea